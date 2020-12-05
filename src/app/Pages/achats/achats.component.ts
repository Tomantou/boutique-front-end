import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pointvente } from 'src/app/Models/pointvente';
import { categorie } from 'src/app/Models/categorie';
import { souscategorie } from 'src/app/Models/souscategorie';
import { PventeServiceService } from 'src/app/Shared/pvente-service.service';
import { CategoriesService } from 'src/app/Shared/categories.service';
import { SouscategoriesService } from 'src/app/Shared/souscategories.service';
import { ToastrModule, ToastrService } from 'ngx-toastr'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';
import {Observable} from 'rxjs';
import { produit } from 'src/app/Models/produit';
import { ProduitsService } from 'src/app/Shared/produits.service';
import { PanierService } from 'src/app/Shared/panier.service';
import { MarquesService } from 'src/app/Shared/marques.service';
import { Router } from '@angular/router';
import { Key } from 'readline';

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css'],
  providers:[PventeServiceService,CategoriesService,SouscategoriesService,ProduitsService]
})
export class AchatsComponent implements OnInit {
public lesproduits: produit[] = [];
selectedProduct: produit;
pventes: pointvente [];
categories: categorie [];
souscategories: souscategorie [];
panier: produit [];
nom: any;
p: number =1;

  constructor(
    private http: HttpClient,
    private ptventeservice: PventeServiceService,
    private categoservice: CategoriesService,
    private souscategservice: SouscategoriesService,
    private produitservice: ProduitsService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void{
    this.selectedProduct = new produit;

    this.produitservice.getProduits().subscribe(
      (produits) => {this.lesproduits=produits;
      console.log('liste produits',this.lesproduits);
      },
      (error) => {
         alert('probleme d\'acces a l api');
      }
      );  


    this.ptventeservice.getPVENTES().subscribe(

      (pointventes) => { this.pventes = pointventes;
      //alert('c\'est ok Bravo!!!!');
      },
      (error) => {
        alert('probleme d\'acces a l api');

       },
     );


    this.categoservice.getCategories().subscribe(
      (categories) => {this.categories = categories;

      },
      (error) => {
         alert('probleme d\'acces a l api categories');
      }
      );  
        
      this.souscategservice.getsousCategories().subscribe(
       (souscategories) => {this.souscategories = souscategories;
       
       },
       (error) => {
          alert('probleme d\'acces a l api sous categories');
       }
       );  

  }

  getProduit(id: number){
    this.selectedProduct = this.lesproduits.find(p => p.Id == id);
  }


  Search(){
    if(this.nom ==''){
        this.ngOnInit();
    }else
    {
       this.lesproduits = this.lesproduits.filter(res => {
          return res.libelleProd.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
       });
         
    }

  }


  key: string = 'Id';
   reverse: boolean = false;

   sort(Key){
     this.key = this.key;
     this.reverse = !this.reverse;

  }

}
