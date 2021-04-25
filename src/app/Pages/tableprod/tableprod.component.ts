import { Component, Input, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/Shared/produits.service';
import { ToastrService } from 'ngx-toastr';
import { produit } from 'src/app/Models/produit';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-tableprod',
  templateUrl: './tableprod.component.html',
  styleUrls: ['./tableprod.component.css'],
})
export class TableprodComponent implements OnInit {
  lesproduits: produit[];
  selectedProduct: produit;
  nom: string;
  allProducts: any;
  key: string = 'Id';
  reverse: boolean = false;
  p: number = 1;
  public boutiqueContainer = environment.boutiqueContainer;
  constructor(
    private produitservice: ProduitsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.selectedProduct = new produit();

    this.refreshProduits();
  }

  sort(Key) {
    this.key = this.key;
    this.reverse = !this.reverse;
  }
  public refreshProduits() {
    this.produitservice.getProduits().subscribe(
      (produits) => {
        this.lesproduits = produits;
        console.log('liste produits', this.lesproduits);
      },
      (error) => {
        alert("probleme d'acces a l api");
      }
    );
  }

  getProduit(id: number) {
    this.selectedProduct = this.lesproduits.find((p) => p.Id == id);
  }

  delProduct(id: number) {
    return this.produitservice.deleteProduct(id).subscribe((res) => {
      this.refreshProduits();
      this.toastr.success('Client supprimé avec succès', 'Notification!');
    });
  }

  Search() {
    if (this.nom == '') {
      this.ngOnInit();
    } else {
      this.lesproduits = this.lesproduits.filter((res) => {
        return res.libelleProd
          .toLocaleLowerCase()
          .match(this.nom.toLocaleLowerCase());
      });
    }
  }
}
