import { Component, Input, OnInit } from '@angular/core';
import { produit } from 'src/app/Models/produit';
import { ProduitDuPanier } from 'src/app/Models/produit-du-panier';
import { ProduitIdDuPanier } from 'src/app/Models/produit-id-du-panier';
import { ProduitDuPanierService } from 'src/app/Shared/produit-du-panier.service';
import { ProduitsService } from 'src/app/Shared/produits.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-panier-drop-down',
  templateUrl: './panier-drop-down.component.html',
  styleUrls: ['./panier-drop-down.component.css'],
})
export class PanierDropDownComponent implements OnInit {
  @Input() userId: string;
  public produitsDuPanier: ProduitIdDuPanier[] = [];
  public produits: ProduitDuPanier[] = [];
  public boutiqueContainer = environment.boutiqueContainer;
  public montantHt: number = 0;
  public montantTtc: number = 0;
  constructor(
    public produitDuPanierService: ProduitDuPanierService,
    public produitsService: ProduitsService
  ) {}

  ngOnInit(): void {
    this.refreshProduits();
  }

  refreshProduits() {
    this.produitsDuPanier = [];
    this.produits = [];
    this.produitDuPanierService.getByUserId(this.userId).subscribe(
      (produitsDuPanier) => {
        this.produitsDuPanier = produitsDuPanier;
        console.log(produitsDuPanier);
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
                //this.montantHt += produit.prix * 1;
              });
            });
        });
        this.montantHt = this.getTotalPrix(this.produits);
        (this.montantTtc = this.montantHt * 0), 21;
        // console.log('this.produits');
        // console.log(this.produits);
        // console.log('this.produits');
        this.produits.sort((a, b) => a.Id - b.Id);
      },
      (error) => {
        alert("probleme d'acces a l api");
      }
    );
  }

  public getTotalPrix(produits: ProduitDuPanier[]): number {
    let total = 0;
    produits.forEach((produit) => (total += produit.prix));

    return total;
  }

  public deleteProduct(productId: number) {
    this.produitDuPanierService
      .deleteProduct(productId)
      .subscribe((response) => this.refreshProduits());
    this.montantHt = this.getTotalPrix(this.produits);
    this.montantTtc = this.montantHt * 0.21;
  }

  public changeQuantityProduct(prod: ProduitDuPanier, valeur: number) {
    const produitDuPanier = this.produitsDuPanier.find(
      (p) => p.Id == prod.panierId
    );
    produitDuPanier.quantity += valeur;
    this.produitDuPanierService
      .putProduct(produitDuPanier)
      .subscribe((response) => this.refreshProduits());
    this.montantHt = this.getTotalPrix(this.produits);
    this.montantTtc = this.montantHt * 0.21;
  }
}
