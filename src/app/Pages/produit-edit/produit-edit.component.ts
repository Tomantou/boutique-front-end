import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { produit } from 'src/app/Models/produit';
import { ProduitDuPanier } from 'src/app/Models/produit-du-panier';
import { ProduitsService } from 'src/app/Shared/produits.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css'],
})
export class ProduitEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private produitservice: ProduitsService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  public produit: produit;

  ngOnInit(): void {
    this.produit = new produit();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProduit(id);
  }

  public getProduit(id: number): void {
    this.produitservice.getById(id).subscribe((response) => {
      this.produit = response[0];
    });
  }

  public updateProduit() {
    this.produitservice
      .updateProduct(this.produit.Id, this.produit)
      .subscribe();
    this.toastr.success('Produit modifié avec succès', 'Notification!');
  }

  gotoPageProduits() {
    const lien = ['produits'];
    this.router.navigate(lien);
  }
}
