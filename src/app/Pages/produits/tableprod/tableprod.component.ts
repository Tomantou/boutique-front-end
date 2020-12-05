import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/Shared/produits.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-tableprod',
  templateUrl: './tableprod.component.html',
  styleUrls: ['./tableprod.component.css']
})
export class TableprodComponent implements OnInit {
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
