import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pointsvente } from 'src/app/Models/pointsvente';
import { gerant } from 'src/app/Models/gerant';
import { PventeServiceService } from 'src/app/Shared/pvente-service.service';
import { GerantsService } from 'src/app/Shared/gerants.service';
import { ToastrModule,ToastrService } from 'ngx-toastr'; 
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-pventes',
  templateUrl: './pventes.component.html',
  styleUrls: ['./pventes.component.css'],
  providers: [PventeServiceService, GerantsService]
})
export class PventesComponent implements OnInit {
 public pointventes : pointsvente [];
 public gerants: gerant [];
 public formData: pointsvente;
  Villes: string[];
  errorMessage = '';

  constructor(
    private gerantsservice: GerantsService,
    private router: Router,
    private  pointventeservice: PventeServiceService,
    private toastr: ToastrService

    ) { }

  ngOnInit() {

     this.formData = new pointsvente;

    this.Villes = [
      "ANVERS",
      "BRUXELLES",
      "LIEGE",
      "NAMUR",
      "MONS",
      "GAND",
      "WATERLOO"
     ];
      this.pointventeservice.getPVENTES().subscribe(

        (pointventes) => { this.pointventes = pointventes;
        console.log('POINTS DE VENTE',this.pointventes);
        //alert('c\'est ok Bravo!!!!');
        },
        (error) => {
          alert('probleme d\'acces a l api');

        },        
      );
    
        
      this.gerantsservice.getGerants().subscribe(
        (gerants) => {this.gerants = gerants;
        console.log('liste gerants',this.gerants);
        },
        (error) => {
           alert('probleme d\'acces a l api');
        }
        ); 
    
      
  }


  addPventes(formpvente: NgForm){
    console.log(formpvente.value);
    this.pointventeservice.savePventes(formpvente.value).subscribe(
      (reponse) => {
             const link = ['configurer'];
             this.router.navigate(link);
      },
      (error) => {
        this.errorMessage = 'Problème de connexion à votre serveur, prière contacter l\'administrateur';
        console.log(error);
      }
    );
    this.toastr.success('Point vente enregistré avec succès','Notification!');
}

resetButton(form? : NgForm){
  if(form != null)form.reset();
  this.formData = {
    Id: 0,
    gerantId: 0,
    adresse: '',
    codePostal: 0,
    ville: '',
    contact: '',
    email: ''
    
  }
  this.toastr.success('formulaire réinitialisé','Notification!');
  }


}
