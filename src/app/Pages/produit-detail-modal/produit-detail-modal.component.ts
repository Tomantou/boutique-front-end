import { Component, Input, OnInit } from '@angular/core';
import { produit } from 'src/app/Models/produit';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-produit-detail-modal',
  templateUrl: './produit-detail-modal.component.html',
  styleUrls: ['./produit-detail-modal.component.css'],
})
export class ProduitDetailModalComponent implements OnInit {
  @Input() selectedProduct: produit;
  public boutiqueContainer = environment.boutiqueContainer;

  constructor() {}

  ngOnInit(): void {
  }
}
