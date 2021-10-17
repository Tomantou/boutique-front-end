import { Component, OnInit } from '@angular/core';
import { pointsvente } from 'src/app/Models/pointsvente';
import { categorie } from 'src/app/Models/categorie';
import { souscategorie } from 'src/app/Models/souscategorie';
import { PventeServiceService } from 'src/app/Shared/pvente-service.service';
import { CategoriesService } from 'src/app/Shared/categories.service';
import { SouscategoriesService } from 'src/app/Shared/souscategories.service';
import { ToastrService } from 'ngx-toastr'; 
import { HttpClient } from '@angular/common/http';
import { produit } from 'src/app/Models/produit';
import { ProduitsService } from 'src/app/Shared/produits.service';
import { environment } from 'src/environments/environment';
import { ProduitDuPanierService } from 'src/app/Shared/produit-du-panier.service';
import { ProduitIdDuPanier } from 'src/app/Models/produit-id-du-panier';

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css'],
  providers: [
    PventeServiceService,
    CategoriesService,
    SouscategoriesService,
    ProduitsService,
  ],
})
export class AchatsComponent implements OnInit {
  public lesproduits: produit[] = [];
  selectedProduct: produit;
  selectedPvente: pointsvente;
  pventes: pointsvente[];
  categories: categorie[];
  souscategories: souscategorie[];
  panier: produit[];
  nom: any;
  p: number = 1;
  public boutiqueContainer = environment.boutiqueContainer;
  useremail: string;

  constructor(
    private ptventeservice: PventeServiceService,
    private categoservice: CategoriesService,
    private souscategservice: SouscategoriesService,
    private produitservice: ProduitsService,
    private produitDuPanierService: ProduitDuPanierService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.useremail = localStorage.getItem('useremail');
    this.selectedProduct = new produit();
    this.selectedPvente = new pointsvente();
    this.produitservice.getProduits().subscribe(
      (produits) => {
        this.lesproduits = produits;
        // console.log('liste produits', this.lesproduits);
      },
      () => {
        alert("probleme d'acces a l api");
      }
    );

    this.ptventeservice.getPVENTES().subscribe(
      (pointventes) => {
        this.pventes = pointventes;
        //alert('c\'est ok Bravo!!!!');
      },
      () => {
        alert("probleme d'acces a l api");
      }
    );

    this.categoservice.getCategories().subscribe(
      (categories) => {
        this.categories = categories;
      },
      () => {
        alert("probleme d'acces a l api categories");
      }
    );

    this.souscategservice.getsousCategories().subscribe(
      (souscategories) => {
        this.souscategories = souscategories;
      },
      () => {
        alert("probleme d'acces a l api sous categories");
      }
    );
  }

  getProduit(id: number) {
    this.selectedProduct = this.lesproduits.find((p) => p.Id == id);
  }

  getPvente(id: number) {
    this.selectedPvente = this.pventes.find((pv) => pv.Id == id);
  }

  Search() {
    if (this.nom == '') {
      this.ngOnInit();
    } else {
      this.lesproduits = this.lesproduits.filter((res) => {
        return res.libelleProd
          .toLocaleLowerCase()
          .match(this.nom.toLocaleLowerCase());
      });
    }
  }

  SearchIdpv() {
    if (this.nom == '') {
      this.ngOnInit();
    } else {
      this.lesproduits = this.lesproduits.filter((res) => {
        return res.libelleProd
          .toLocaleLowerCase()
          .match(this.nom.toLocaleLowerCase());
      });
    }
  }

  key: string = 'Id';
  reverse: boolean = false;

  sort() {
    this.key = this.key;
    this.reverse = !this.reverse;
  }

  public addToPanier(productId: number) {
    this.useremail = localStorage.getItem('useremail');
    if (!this.useremail) {
      alert('Connectez-vous SVP');
      return;
    }
    const produitDuPanier = new ProduitIdDuPanier(productId, this.useremail, 1);
    this.produitDuPanierService.addProduct(produitDuPanier).subscribe();
  }
}
