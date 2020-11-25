import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { produit } from 'src/app/Models/produit';
import { marque } from 'src/app/Models/marque';
import { categorie } from 'src/app/Models/categorie';
import { ProduitsService } from 'src/app/Shared/produits.service';
import { MarquesService } from 'src/app/Shared/marques.service';
import { CategoriesService } from 'src/app/Shared/categories.service';
import { ToastrService } from 'ngx-toastr'; 
import { HttpClientModule } from '@angular/common/http';
import { url } from 'inspector';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
  providers:[ProduitsService]
})
export class ProduitsComponent implements OnInit {
   public lesproduits: produit[];
   public formData: produit;
   public lescategories: categorie [];
   marques: marque [];
   errorMessage='';
   
   
  constructor(
     public produitservice: ProduitsService,
     public categorieservice: CategoriesService,
     public marqueservice: MarquesService,
     private router: Router,
     private toastr: ToastrService
     ) { }

  ngOnInit(){
     this.formData = new produit();
   this.categorieservice.getCategories().subscribe(
      (categories) => {this.lescategories = categories;
      //console.log('liste categories',this.categories);
      },
      (error) => {
         alert('probleme d\'acces a l api categories');
      }
      );  

      this.marqueservice.getMarques().subscribe(
         (marques) => {this.marques = marques;
         //console.log('liste marquess',this.marques);
         },
         (error) => {
            alert('probleme d\'acces a l api');
         }
         );  
    
    
      this.produitservice.getProduits().subscribe(
         (produits) => {this.lesproduits=produits;
         console.log('liste produits',this.lesproduits);
         },
         (error) => {
            alert('probleme d\'acces a l api');
         }
         );  
  }


  addProduit(formProd: NgForm){
   console.log(formProd.value);
   this.produitservice.saveProduit(formProd.value).subscribe(
     (reponse) => {
            const link = ['configurer'];
            this.router.navigate(link);
     },
     (error) => {
       this.errorMessage = 'Problème de connexion à votre serveur, prière contacter l\'administrateur';
       console.log(error);
     }
   );
   this.toastr.success('Client enregistrée avec succès','Notification!');
}
    
     loggerform(formProd: NgForm){
        console.log(formProd);   
     }



     resetButton(form? : NgForm){
      if(form != null)form.reset();
       this.formData = {
         Id: 0,
         categorieId: 0,
         marqueId: 0,
         libelleProd: '',
         prix: 0,
         photo: '',
         description: ''
      
       }
      this.toastr.success('formulaire réinitialisé','Notification!');
      }
    

  

    

}
