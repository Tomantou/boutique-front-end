import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { produit } from 'src/app/Models/produit';
import { marque } from 'src/app/Models/marque';
import { categorie } from 'src/app/Models/categorie';
import { ProduitsService } from 'src/app/Shared/produits.service';
import { PventeServiceService } from 'src/app/Shared/pvente-service.service';
import { GerantsService } from 'src/app/Shared/gerants.service';
import { MarquesService } from 'src/app/Shared/marques.service';
import { CategoriesService } from 'src/app/Shared/categories.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Key } from 'readline';
import { FilemangerService } from 'src/app/Shared/filemanger.service';
import { environment } from 'src/environments/environment';
import { TableprodComponent } from '../tableprod/tableprod.component';
import { stock } from 'src/app/Models/stock';
import { StocksService } from 'src/app/Shared/stocks.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
  providers: [ProduitsService],
})
export class ProduitsComponent implements OnInit {
  public formData: produit;
  public formStock: stock;
  public lescategories: categorie[] = [];
  marques: marque[] = [];
  errorMessage = '';
  public logo: File;
  @ViewChild(TableprodComponent, { static: false }) tableprod;
  @ViewChild(TableprodComponent, { static: false }) selectedProduct;
  constructor(
    public produitservice: ProduitsService,
    public stoksservice: StocksService,
    public filemanagerservice: FilemangerService,
    public categorieservice: CategoriesService,
    public marqueservice: MarquesService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.formData = new produit();
    this.formStock = new stock();
    this.categorieservice.getCategories().subscribe(
      (categories) => {
        this.lescategories = categories;
        //console.log('liste categories',this.categories);
      },
      (error) => {
        alert("probleme d'acces a l api categories");
      }
    );

    this.marqueservice.getMarques().subscribe(
      (marques) => {
        this.marques = marques;
        // console.log('liste marquess',this.marques);
      },
      (error) => {
        alert("probleme d'acces a l api");
      }
    );
  }

  // j'ai deux methodes pour ajouter les produits, addProduit et addProduct
  //   addProduct(formProd) {
  //     let obj = formProd.value;
  //     this.produitservice.createProduct(obj).subscribe((response) => {
  //       this.toastr.success('Client enregistrée avec succès', 'Notification!');
  //       formProd.form.reset();
  //       // this.produitservice.informChild();
  //     });
  //   }

  addProduit() {
    this.produitservice.saveProduit(this.formData).subscribe({
      next: (response) => {
        this.filemanagerservice.uploadImage(this.logo);
        this.toastr.success('Produit enregistrée avec succès', 'Notification!');
        this.tableprod.refreshProduits();
        //   const link = ['produits'];
        //   this.router.navigate(link);
      },
      error: (error) => {
        this.errorMessage =
          "Problème de connexion à votre serveur, prière contacter l'administrateur";
        console.log(error);
      },
    });
  }

  addStocks() {
    for (let i = 0; i < 5; i++) {
      this.formStock.Id = i.toString() + this.formData.Id.toString();
      this.formStock.pointventeId = i;
      this.formStock.produitId = this.formData.Id;
      this.formStock.quantiteMax = 10;
      this.formStock.quantiteMin = 5;
      this.formStock.quantiteStock = 5;
      this.stoksservice.saveStock(this.formStock).subscribe({
        next: (response) => {
          console.log('Stock enregistrée avec succès');
          //   const link = ['produits'];
          //   this.router.navigate(link);
        },
        error: (error) => {
          this.errorMessage =
            "Problème de connexion à votre serveur, prière contacter l'administrateur";
          console.log(error);
        },
      });
    }
  }

  retouralaccueil() {
    const lien = ['accueil'];
    this.router.navigate(lien);
  }

  onChangeMarqueId(id: number) {
    this.formData.marqueId = Number(id);
  }
  onChangeCategoryId(id: number) {
    this.formData.categorieId = Number(id);
  }

  loggerform(formProd: NgForm) {
    console.log(formProd);
  }

  resetButton(form?: NgForm) {
    if (form != null) form.reset();
    this.formData = {
      Id: 0,
      categorieId: 0,
      marqueId: 0,
      libelleProd: '',
      prix: 0,
      photo: '',
      description: '',
      stock: null,
    };
    this.toastr.success('formulaire réinitialisé', 'Notification!');
  }

  processImage(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.logo = file;
      this.formData.photo = file.name;
      console.log(this.formData);
    });
    reader.readAsDataURL(file);
  }
}
