import { Component, Inject, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { pointsvente } from 'src/app/Models/pointsvente';
import { ProduitDuPanier } from 'src/app/Models/produit-du-panier';
import { ProduitIdDuPanier } from 'src/app/Models/produit-id-du-panier';
import { ProduitStock } from 'src/app/Models/produit-stock';
import { ProduitDuPanierService } from 'src/app/Shared/produit-du-panier.service';
import { ProduitsService } from 'src/app/Shared/produits.service';
import { PventeServiceService } from 'src/app/Shared/pvente-service.service';
import { CmdesclientsService } from 'src/app/Shared/cmdesclients.service';
import { StocksService } from 'src/app/Shared/stocks.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr'; 
import { flatMap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  userId: string;
  public produitsDuPanier: ProduitIdDuPanier[];
  public produits: ProduitDuPanier[];
  public boutiqueContainer = environment.boutiqueContainer;
  public total: number;
  public montantHt: number = 0;
  public montantTtc: number = 0;
  pventes: pointsvente[];
  selectedPventeId: number;
  public produitStock: ProduitStock[];
  public confirmed = false;
  public numeroCmde: number;
  public detailsCmde: string;

  constructor(
    private ptventeservice: PventeServiceService,
    public produitDuPanierService: ProduitDuPanierService,
    public produitsService: ProduitsService,
    private router: Router,
    public stocksService: StocksService
  ) {}

  ngOnInit(): void {
  this.numeroCmde = Math.round(Math.random() * (3000 - 100) + 100);
    (document.getElementById('confirmBtn') as HTMLInputElement).disabled = true;
    this.userId = localStorage.getItem('useremail');
    this.refreshProduits();
    this.ptventeservice.getPVENTES().subscribe(
      (pointventes) => {
        this.pventes = pointventes;
        //alert('c\'est ok Bravo!!!!');
      },
      () => {
        alert("probleme d'acces a l api");
      }
    );
  }

  setPvente(p: number) {
    (document.getElementById(
      'confirmBtn'
    ) as HTMLInputElement).disabled = false;
    this.produitStock = [];
    this.selectedPventeId = p;
    this.produits.forEach((produit) => {
      this.stocksService
        .getStocksByPvEtPId(this.selectedPventeId, produit.Id)
        .subscribe((responseStock) => {
          let enStock;
          let stock;
          let stockObject;
          if (!responseStock || responseStock.length == 0) {
            enStock = false;
            stock = 0;
            stockObject = undefined;
          } else {
            enStock = produit.quantity <= responseStock[0].quantiteStock;
            stock = responseStock[0].quantiteStock;
            stockObject = responseStock[0];
          }
          if (!enStock) {
            (document.getElementById(
              'confirmBtn'
            ) as HTMLInputElement).disabled = true;
          }
          this.produitStock.push(
            new ProduitStock(
              produit.Id,
              produit.libelleProd,
              produit.quantity,
              stock,
              enStock,
              stockObject
            )
          );
        });
    });
  }

  refreshProduits() {
    this.produitsDuPanier = [];
    this.produits = [];
    this.produitDuPanierService.getByUserId(this.userId).subscribe(
      (produitsDuPanier) => {
        this.produitsDuPanier = produitsDuPanier;
        this.produitsDuPanier.forEach((produitDuPanier) => {
          this.produitsService
            .getById(produitDuPanier.productId)
            .subscribe((responseProduitsDuPanier) => {
              responseProduitsDuPanier.forEach((produit) => {
                this.produits.push(
                  new ProduitDuPanier(
                    produit.Id,
                    produitDuPanier.Id,
                    produit.libelleProd,
                    produit.prix,
                    produitDuPanier.quantity,
                    produit.photo
                  )
                );
              });
              this.refreshTotalPrix();
            });
        });
        this.produits.sort((a, b) => a.Id - b.Id);
      },
      () => {
        alert("probleme d'acces a l api");
      }
    );
  }

  private getDetailsString(produits: ProduitDuPanier[]): string {
    let details = '';
    produits.forEach((produit) => {
      details += produit.libelleProd + ' : ' + produit.prix + ', ';
    });
    return details;
  }

  public refreshTotalPrix() {
    this.total = 0;
    this.produits.forEach((produit) => {
      this.total += produit.prix;
    });
    this.montantHt = this.total;
    this.montantTtc = this.montantHt * 1.21;
  }

  public deleteProduct(productId: number) {
    this.produitDuPanierService
      .deleteProduct(productId)
      .subscribe(() => this.refreshProduits());
    this.refreshTotalPrix();
  }

  public changeQuantityProduct(prod: ProduitDuPanier, valeur: number) {
    const produitDuPanier = this.produitsDuPanier.find(
      (p) => p.Id == prod.panierId
    );
    produitDuPanier.quantity += valeur;
    this.produitDuPanierService
      .putProduct(produitDuPanier)
      .subscribe(() => this.refreshProduits());
    this.refreshTotalPrix();
  }

  public async confirm() {
    this.detailsCmde = this.getDetailsString(this.produits);
    this.produits.forEach((p) => {
      let stockDuProduit = this.produitStock.find(
        (s) => s.stockObject.produitId == p.Id
      );
      stockDuProduit.stockObject.quantiteStock -= p.quantity;
      this.stocksService.putStock(stockDuProduit.stockObject).subscribe(() => {
        this.deleteProduct(p.panierId);
        this.produitStock = [];
        (document.getElementById(
          'confirmBtn'
        ) as HTMLInputElement).disabled = true;
        this.confirmed = true;
      });
    });
  }

  gotoPageAchats() {
    this.refreshTotalPrix();
    const lien = ['achats'];
    this.router.navigate(lien);
  }
}
