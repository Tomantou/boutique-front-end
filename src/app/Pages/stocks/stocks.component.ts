import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/Shared/stocks.service';
import { ProduitsService } from 'src/app/Shared/produits.service';
import { PventeServiceService } from 'src/app/Shared/pvente-service.service';
import { GerantsService } from 'src/app/Shared/gerants.service';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { stock } from 'src/app/Models/stock';
import { produit } from 'src/app/Models/produit';
import { pointsvente } from 'src/app/Models/pointsvente';
import { Router } from '@angular/router';
import { gerant } from 'src/app/Models/gerant';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
  providers: [StocksService],
})
export class StocksComponent implements OnInit {
  stocks: stock[] = [];
  lesproduits: produit[] =[];
  pventes: pointsvente[] = [];
  gerants: gerant[] = [];
  selectedProduct: produit;
  selectedPvente: pointsvente;
  selectedGerant: gerant;
  constructor(
    public stockservice: StocksService,
    public toastr: ToastrService,
    public prodservice: ProduitsService,
    public pventeservice: PventeServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.selectedPvente = new pointsvente();
    this.selectedGerant = new gerant();
    this.stockservice.getStocks().subscribe(
      (stocks) => {
        this.stocks = stocks;
        console.log('liste stocks', this.stocks);
      },
      (error) => {
        alert(
          "probleme d'acces au serveur, veuillez contacter votre administrateur"
        );
      }
    );

    this.prodservice.getProduits().subscribe(
      (produits) => {
        this.lesproduits = produits;
        console.log('liste produits', this.lesproduits);
      },
      (error) => {
        alert("probleme d'acces a l api");
      }
    );

    this.pventeservice.getPVENTES().subscribe(
      (pointventes) => {
        this.pventes = pointventes;
        console.log('POINTS DE VENTE', this.pventes);
        //alert('c\'est ok Bravo!!!!');
      },
      (error) => {
        alert("probleme d'acces a l api");
      }
    );
  }

  getProduct(id: number) {
    return this.selectedProduct = this.lesproduits.find((p) => p.Id == id);
  }

  retouralaccueil() {
    const lien = ['accueil'];
    this.router.navigate(lien);
  }

  getPvente(pvid: number) {
    return this.selectedPvente = this.pventes.find((p) => p.Id == pvid);
  }

  getGerant(gerid: number) {
    return this.selectedGerant = this.gerants.find((g) => g.Id == gerid);
  }
}