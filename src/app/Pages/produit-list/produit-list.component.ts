
import { Component, Input, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/Shared/produits.service';
import { ToastrService } from 'ngx-toastr';
import { produit } from 'src/app/Models/produit';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  @Input () lesproduits: produit [];
  constructor( private produitservice: ProduitsService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.produitservice.getProduits().subscribe(
      (produits) => {
         this.lesproduits = produits;
         console.log('liste produits', this.lesproduits);
      },
      (error) => {
         alert('probleme d\'acces a l api');
      }
   );

  }

}
