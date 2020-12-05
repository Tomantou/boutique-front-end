import { Component, Input, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/Shared/produits.service';
import { ToastrService } from 'ngx-toastr';
import { produit } from 'src/app/Models/produit';
@Component({
  selector: 'app-tableprod',
  templateUrl: './tableprod.component.html',
  styleUrls: ['./tableprod.component.css']
})
export class TableprodComponent implements OnInit {
  @Input () lesproduits: produit [];
allProducts: any;
  constructor(
    private produitservice: ProduitsService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.produitservice.productAdded.subscribe(Res =>{
      this.toastr.success('Client enregistrée avec succès', 'Notification!');
    })
  }

}
