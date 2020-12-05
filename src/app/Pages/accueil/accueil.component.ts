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
import { Key } from 'readline';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  providers: [ProduitsService]
})
export class AccueilComponent implements OnInit {
  lesproduits: produit [];
  panier: produit [];
  selectedProduct: produit;
  p: number = 1;
  public boutiqueContainer = environment.boutiqueContainer;

  constructor(
    private produitservice: ProduitsService
  ) { }

  opened = true;
  title = 'NCL *  Nutri-Cosmétique en Ligne';
  toggleSidebar(){
    this.opened = !this.opened; 
  }
  ngOnInit(): void {
    this.toggleSidebar();

    this.selectedProduct  = new produit;
    this.produitservice.getProduits().subscribe(
      (produits) => {this.lesproduits=produits;
      console.log('liste produits',this.lesproduits);
      },
      (error) => {
         alert('probleme d\'acces a l api');
      }
      );  

  }


// Get a product
// getProduit(id: number): produit{
//   return this.lesproduits.find(p => p.Id === id);
// }

getProduit(id: number){
  this.selectedProduct = this.lesproduits.find(p => p.Id == id);
  console.log(this.selectedProduct);
}


  key: string = 'Id';
   reverse: boolean = false;

   sort(Key){
     this.key = this.key;
     this.reverse = !this.reverse;

   }

}
