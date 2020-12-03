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

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  providers: [ProduitsService]
})
export class AccueilComponent implements OnInit {
  lesproduits: produit [];
  panier: produit [];
  p: number = 1;


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

    
    this.produitservice.getProduits().subscribe(
      (produits) => {this.lesproduits=produits;
      console.log('liste produits',this.lesproduits);
      },
      (error) => {
         alert('probleme d\'acces a l api');
      }
      );  

  }


  key: string = 'Id';
   reverse: boolean = false;

   sort(Key){
     this.key = this.key;
     this.reverse = !this.reverse;

   }

}
