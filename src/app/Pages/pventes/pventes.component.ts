import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pointvente } from 'src/app/Models/pointvente';
import { PventeServiceService } from 'src/app/Shared/pvente-service.service';
import { ToastrModule } from 'ngx-toastr'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pventes',
  templateUrl: './pventes.component.html',
  styleUrls: ['./pventes.component.css'],
  providers: [PventeServiceService],
})
export class PventesComponent implements OnInit {
  pointventes : pointvente [];

  constructor(
    private pventeservice: PventeServiceService
    ) { }

  ngOnInit() {
      this.pventeservice.getPVENTES().subscribe(

        (pointventes) => { this.pointventes = pointventes;
        console.log('POINTS DE VENTE',this.pointventes);
        //alert('c\'est ok Bravo!!!!');
        },
        (error) => {
          alert('probleme d\'acces a l api');

        },




        
      );
    
        
    
      
  }

}
