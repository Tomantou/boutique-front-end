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
  styleUrls: ['./panier-drop-down.component.css']
})
export class PanierDropDownComponent implements OnInit {

  @Input() userId: string
  public produitsDuPanier: ProduitIdDuPanier[] = [];
  public produits: ProduitDuPanier[] = []
  public boutiqueContainer = environment.boutiqueContainer;

  constructor(public produitDuPanierService: ProduitDuPanierService,
    public produitsService: ProduitsService) { }

  ngOnInit(): void {
    this.refreshProduits()
  }

  refreshProduits() {
    this.produitsDuPanier = []
    this.produits = []
    this.produitDuPanierService.getByUserId(this.userId).subscribe(
      (produitsDuPanier) => {
        this.produitsDuPanier = produitsDuPanier;
        this.produitsDuPanier.forEach(produitDuPanier => {
          this.produitsService.getById(produitDuPanier.productId).subscribe(
            (responseProduitsDuPanier) => {
              responseProduitsDuPanier.forEach(produit => {
                this.produits.push(new ProduitDuPanier(produit.Id, produitDuPanier.Id, produit.libelleProd, produit.prix, produit.photo))
              });
            }
          )
        });
      },
      (error) => {
        alert('probleme d\'acces a l api');
      }
    );
  }
  public deleteProduct(productId: number) {
    this.produitDuPanierService.deleteProduct(productId).subscribe(
      response => this.refreshProduits()
    )
  }
}
