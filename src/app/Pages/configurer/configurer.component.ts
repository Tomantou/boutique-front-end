import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { signaletiques } from 'src/app/Models/signaletiques';
import { ConfigurerService } from 'src/app/Shared/configurer.service';
import { ToastrModule } from 'ngx-toastr'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configurer',
  templateUrl: './configurer.component.html',
  styleUrls: ['./configurer.component.css'],
  providers: [ConfigurerService]
})
export class ConfigurerComponent implements OnInit {
 typesocietes: string [];
 lespays: string [];
 errorMessage ='';

  constructor(
    private configSignal: ConfigurerService,
    private router: Router
    ) { }

  ngOnInit(): void {
     this.typesocietes = [
        "ASBL",
        "SA",
        "SCRL",
        "SPRL",
        "INDEPENDANT"
       ];

      this.lespays = ["Australie", "Allemagne", "Belgique", "France", "USA", "Italie", "Espagne", "Portugal", "Suisse", "Pays-bas", "Suède", "Pologne"
      ];
  }

  addSignal(formsignal: NgForm){
      
      this.configSignal.saveSignaletique(formsignal.value).subscribe(
        (reponse) => {
               console.log(formsignal.value);
               const link = ['configurer'];
               this.router.navigate(link);
        },
        (error) => {
          this.errorMessage = 'Problème de connexion à votre serveur, prière contacter l\'administrateur';
          console.log(error);
        }
      );
  }

}
