import { Component, OnInit } from '@angular/core';
import { client } from 'src/app/Models/client';
import { NgForm } from '@angular/forms';
import { signaletiques } from 'src/app/Models/signaletiques';
import { ClientsService } from 'src/app/Shared/clients.service';
import { ToastrModule, ToastrService } from 'ngx-toastr'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers:[ClientsService]
})
export class ClientsComponent implements OnInit {
  public civilites: string [];
  public formData: client;
  public lesclients: client [];
  errorMessage ='';

  constructor(
    private clientservice: ClientsService,
    private router: Router,
    private toastr: ToastrService
    
    ) { }

  ngOnInit(): void {
    this.civilites = [
      "Mme",
      "Mr"
     ];
     this.formData = new client();

     this.clientservice.getClients().subscribe(
      (clients) => {this.lesclients = clients;
      console.log('liste clients',this.lesclients);
      },
      (error) => {
         alert('probleme d\'acces a l api');
      }
      );  
  }

  addClient(formclient: NgForm){
    console.log(formclient.value);
    this.clientservice.saveClient(formclient.value).subscribe(
      (reponse) => {
             const link = ['configurer'];
             this.router.navigate(link);
      },
      (error) => {
        this.errorMessage = 'Problème de connexion à votre serveur, prière contacter l\'administrateur';
        console.log(error);
      }
    );
    this.toastr.success('Client enregistrée avec succès','Notification!');
}

resetButton(form? : NgForm){
  if(form != null)form.reset();
  this.formData = {
    Id:0,
     nom: '',
     prenom: '',
     adresse: '',
     codePostal: 0,
     ville: '',
     civilite: '',
     contact: '',
     email: ''

  }
  this.toastr.success('formulaire réinitialisé','Notification!');
  }

}
