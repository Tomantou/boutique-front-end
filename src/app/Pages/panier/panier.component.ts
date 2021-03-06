import { Component, OnInit } from '@angular/core';
import { pointsvente } from 'src/app/Models/pointsvente';
import { ProduitDuPanier } from 'src/app/Models/produit-du-panier';
import { ProduitIdDuPanier } from 'src/app/Models/produit-id-du-panier';
import { ProduitStock } from 'src/app/Models/produit-stock';
import { ProduitDuPanierService } from 'src/app/Shared/produit-du-panier.service';
import { ProduitsService } from 'src/app/Shared/produits.service';
import { PventeServiceService } from 'src/app/Shared/pvente-service.service';
import { StocksService } from 'src/app/Shared/stocks.service';
import { environment } from 'src/environments/environment';

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
  public montantHt: number = 0;
  public montantTtc: number = 0;
  pventes: pointsvente[];
  selectedPventeId: number;
  public produitStock: ProduitStock[];

  constructor(
    private ptventeservice: PventeServiceService,
    public produitDuPanierService: ProduitDuPanierService,
    public produitsService: ProduitsService,
    public stocksService: StocksService
  ) {}

  ngOnInit(): void {
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
    (document.getElementById("confirmBtn") as HTMLInputElement).disabled = false;
    this.produitStock = [];
    this.selectedPventeId = p;
    this.produits.forEach(produit => {
      this.stocksService
        .getStocksByPvEtPId(this.selectedPventeId, produit.Id)
        .subscribe((responseStock) => {
          let enStock;
          let stock;
          if (!responseStock || responseStock.length == 0) {
            enStock = false;
            stock = 0;
          }
          else {
            enStock = produit.quantity <= responseStock[0].quantiteStock;
            stock = responseStock[0].quantiteStock;
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
              enStock
            )
          );
        }
        );
    })
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
      (error) => {
        alert("probleme d'acces a l api");
      }
    );
  }

  public refreshTotalPrix() {
    let total = 0;
    // console.log(this.produits);
    // console.log(this.produits.length);
    this.produits.forEach((produit) => {
      total += produit.prix;
    });
    this.montantHt = total;
    this.montantTtc = this.montantHt * 1.21;
  }

  public deleteProduct(productId: number) {
    this.produitDuPanierService
      .deleteProduct(productId)
      .subscribe((response) => this.refreshProduits());
    this.refreshTotalPrix();
  }

  public changeQuantityProduct(prod: ProduitDuPanier, valeur: number) {
    const produitDuPanier = this.produitsDuPanier.find(
      (p) => p.Id == prod.panierId
    );
    produitDuPanier.quantity += valeur;
    this.produitDuPanierService
      .putProduct(produitDuPanier)
      .subscribe((response) => this.refreshProduits());
    this.refreshTotalPrix();
  }

  public confirm() {
    console.log("k")
  }
}
