import { Component, OnInit } from '@angular/core';
import { promos } from 'src/app/Models/promos';
import { produit } from 'src/app/Models/produit';
import { NgForm } from '@angular/forms';
import { promouvoir } from 'src/app/Models/promouvoir';
import { PromosService } from 'src/app/Shared/promos.service';
import { PromotionsService } from 'src/app/Shared/promotions.service';
import { ProduitsService } from 'src/app/Shared/produits.service';
import { ToastrModule, ToastrService } from 'ngx-toastr'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promotionss',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css'],
  providers:[PromosService, PromotionsService]
})
export class PromotionsComponent implements OnInit {
  public lespromos: promos [];
  public lespromouvoirs: promouvoir [];
  public lesproduits: produit [];
  public formDataprom: promos;
  public formDatapromouvoir: promouvoir;
  errorMessage ='';

  constructor(
    private promoservice: PromosService,
    private promouvoirservice: PromotionsService,
    private produitservice: ProduitsService,
    private router: Router,
    private toastr: ToastrService
    
    ) { }

  ngOnInit(): void {
    
     this.formDataprom = new promos();
     this.formDatapromouvoir = new promouvoir();

     this.promouvoirservice.getPromotions().subscribe(
      (promotions) => {this.lespromouvoirs = promotions;
      console.log('liste promouvoir',this.lespromouvoirs);
      },
      (error) => {
         alert('probleme d\'acces a l api');
      }
      );  

      this.promoservice.getPromos().subscribe(
        (promos) => {this.lespromos = promos;
        console.log('liste promos',this.lespromos);
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

  addPromotions(formpromouvoir: NgForm){
    console.log(formpromouvoir.value);
    this.promouvoirservice.savePromotions(formpromouvoir.value).subscribe(
      (reponse) => {
             const link = ['promotions'];
             this.router.navigate(link);
      },
      (error) => {
        // this.errorMessage = 'Problème de connexion à votre serveur, prière contacter l\'administrateur';
        console.log(error);
      }
    );
    this.toastr.success('Produit promu avec succès','Notification!');
  }

  addPromos(formpromo: NgForm){
    console.log(formpromo.value);
    this.promoservice.savePromos(formpromo.value).subscribe(
      (reponse) => {
             const link = ['promotions'];
             this.router.navigate(link);
      },
      (error) => {
        this.errorMessage = 'Problème de connexion à votre serveur, prière contacter l\'administrateur';
        console.log(error);
      }
    );
    this.toastr.success('Promo enregistrée avec succès','Notification!');

  }

  resetButton(form? : NgForm){
    if(form != null)form.reset();
    this.formDatapromouvoir = {
      Id: 0,
      promoId: 0,
      produitId: 0,
      discount: 0
  
    }
    this.toastr.success('formulaire réinitialisé','Notification!');
    }

}


