import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { signaletiques } from 'src/app/Models/signaletiques';
import { ConfigurerService } from 'src/app/Shared/configurer.service';
import { ToastrModule, ToastrService } from 'ngx-toastr'; 
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
public formData: signaletiques;
 typesocietes: string [];
 lespays: string [];
 errorMessage ='';

  constructor(
    public configSignal: ConfigurerService,
    private router: Router,
    private toastr: ToastrService
    ) { 
    }

  ngOnInit(): void {
     this.typesocietes = [
        "ASBL",
        "SA",
        "SCRL",
        "SPRL",
        "INDEPENDANT"
       ];
       this.formData = new signaletiques();
      this.lespays = ["Australie", "Allemagne", "Belgique", "France", "USA", "Italie", "Espagne", "Portugal", "Suisse", "Pays-bas", "Suède", "Pologne"
      ];
  }

   addSignal(formsignal: NgForm){
      this.configSignal.saveSignaletique(formsignal.value).subscribe(
        (reponse) => {
               const link = ['configurer'];
               this.router.navigate(link);
        },
        (error) => {
          this.errorMessage = 'Problème de connexion à votre serveur, prière contacter l\'administrateur';
          console.log(error);
        }
      );
      this.toastr.success('Congifuration enregistrée avec succès','Notification!');
  }

  resetButton(form? : NgForm){
    if(form != null)form.reset();
    this.formData = {

       numeroTva: 0,
       raisonSocial: '',
       typeSociete: '',
       logo: '',
       adresseSiege: '',
       contact: '',
       emailSiege: '',
       pays: '',
       tauxTva: 0,
       devise: ''

    }
    this.toastr.success('formulaire réinitialisé','Notification!');
  }

  onSubmit(form : NgForm){
    if(form.value.numeroTva == null){
         this.configSignal.saveSignaletique(form.value).subscribe(
           data => {this.resetButton(form);
     })

    }

  }

}
