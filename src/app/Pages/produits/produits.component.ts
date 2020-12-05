import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { produit } from 'src/app/Models/produit';
import { marque } from 'src/app/Models/marque';
import { categorie } from 'src/app/Models/categorie';
import { ProduitsService } from 'src/app/Shared/produits.service';
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


@Component({
   selector: 'app-produits',
   templateUrl: './produits.component.html',
   styleUrls: ['./produits.component.css'],
   providers: [ProduitsService]
})

export class ProduitsComponent implements OnInit {
   public lesproduits: produit[] = [];
   public formData: produit;
   selectedProduct: produit;
   public lescategories: categorie[] = [];
   marques: marque[] = [];
   errorMessage = '';
   nom: any;
   p: number = 1;
   public logo: File;
   public boutiqueContainer = environment.boutiqueContainer;

   constructor(
      public produitservice: ProduitsService,
      public filemanagerservice: FilemangerService,
      public categorieservice: CategoriesService,
      public marqueservice: MarquesService,
      private router: Router,
      private toastr: ToastrService
   ) { }

   ngOnInit(): void {
      this.selectedProduct = new produit;
      this.formData = new produit();
      this.categorieservice.getCategories().subscribe(
         (categories) => {
            this.lescategories = categories;
            //console.log('liste categories',this.categories);
         },
         (error) => {
            alert('probleme d\'acces a l api categories');
         }
      );

      this.marqueservice.getMarques().subscribe(
         (marques) => {
            this.marques = marques;
            // console.log('liste marquess',this.marques);
         },
         (error) => {
            alert('probleme d\'acces a l api');
         }
      );


      this.produitservice.getProduits().subscribe(
         (produits) => {
            this.lesproduits = produits;
            console.log('liste produits', this.lesproduits);
         },
         (error) => {
            alert('probleme d\'acces a l api');
         }
      );
   }

   Search() {
      if (this.nom == '') {
         this.ngOnInit();
      } else {
         this.lesproduits = this.lesproduits.filter(res => {
            return res.libelleProd.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
         });

      }

   }

   key: string = 'Id';
   reverse: boolean = false;

   sort(Key) {
      this.key = this.key;
      this.reverse = !this.reverse;

   }

   // j'ai deux methodes pour ajouter les produits, addProduit et addProduct
   addProduct(formProd){
      let obj =  formProd.value;
      this.produitservice.createProduct(obj).subscribe(response =>
         {
            this.toastr.success('Client enregistrée avec succès', 'Notification!');
            formProd.form.reset();
            // this.produitservice.informChild();
          });

   }

   addProduit() {
      this.produitservice.saveProduit(this.formData).subscribe({
         next: (response) => {
            this.filemanagerservice.uploadImage(this.logo)
            this.toastr.success('Client enregistrée avec succès', 'Notification!');
            const link = ['produits'];
            this.router.navigate(link);
         },
         error: (error) => {
            this.errorMessage = 'Problème de connexion à votre serveur, prière contacter l\'administrateur';
            console.log(error);
         }
      }
      );
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


   getProduit(id: number){
      this.selectedProduct = this.lesproduits.find(p => p.Id == id);
    }


    getDelProduit(id: number){
      this.selectedProduct = this.lesproduits.find(p => p.Id == id);
      return this.produitservice.getProductById(this.selectedProduct.Id).subscribe(res =>{
         this.toastr.success('Client enregistrée avec succès', 'Notification!');
         const link = ['produits'];
         this.router.navigate(link);
      });

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
         description: ''

      }
      this.toastr.success('formulaire réinitialisé', 'Notification!');
   }

   processImage(imageInput: any) {
      const file: File = imageInput.files[0];
      const reader = new FileReader();

      reader.addEventListener('load', (event: any) => {
         this.logo = file;
         this.formData.photo = file.name
         console.log(this.formData)
      });
      reader.readAsDataURL(file);
   }

   delProduct(id: number){
      return this.produitservice.deleteProduct(id).subscribe(res =>{
         this.toastr.success('Client enregistrée avec succès', 'Notification!');
         const link = ['produits'];
         this.router.navigate(link);
      });
   }

}
