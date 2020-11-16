import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { produit } from 'src/app/Models/produit';
import { ProduitsService } from 'src/app/Shared/produits.service';
import { ToastrModule } from 'ngx-toastr'; 
import { HttpClientModule } from '@angular/common/http';
import { url } from 'inspector';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
  providers:[ProduitsService]
})
export class ProduitsComponent implements OnInit {
   lesproduits: produit[];
   Produit: produit;
   Categories: string[];
   Marques: string[];
   
   
  constructor(public produitservice: ProduitsService) { }

  ngOnInit(){

   this.Categories = [
      "INFORMATIQUE",
      "REASEAUX",
      "IMPRESSION",
      "CONSOMMABLES",
      "BUREAUTIQUE"
     ];

    this.Marques = ["APPLE", "HP", "CANON", "BROTHER", "SAMSUNG", "TOSHIBA"
    ];
    
      this.produitservice.getProduits().subscribe(
         (produits) => {this.lesproduits=produits;
         console.log('liste produits',this.lesproduits);
         },
         (error) => {
            alert('probleme d\'acces a l api');
         }
         );  
           
     
    
  }
    
     loggerform(formProd: NgForm){
        console.log(formProd);   
     }

  

    

}
