import { Component, OnInit } from '@angular/core';
import { cmdesclient } from 'src/app/Models/cmdesclient';
import { NgForm } from '@angular/forms';
import { signaletiques } from 'src/app/Models/signaletiques';
import { CmdesclientsService } from 'src/app/Shared/cmdesclients.service';
import { ToastrModule, ToastrService } from 'ngx-toastr'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cmdesclients',
  templateUrl: './cmdesclients.component.html',
  styleUrls: ['./cmdesclients.component.css'],
  providers: [CmdesclientsService]
})
export class CmdesclientsComponent implements OnInit {
  public civilites: string [];
  formData: cmdesclient;
  public lescmdesclients: cmdesclient [];
  errorMessage ='';

  constructor(
    private cmdesclientservice: CmdesclientsService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.civilites = [
      "Mme",
      "Mr"
     ];
     this.formData = new cmdesclient();

     this.cmdesclientservice.getCmdesclients().subscribe(
      (cmdesclients) => {this.lescmdesclients = cmdesclients;
      console.log('liste clients',this.lescmdesclients);
      },
      (error) => {
         alert('probleme d\'acces a l api');
      }
      );  
  }

  addCmdesclients(formcmdesclient: NgForm){
    console.log(formcmdesclient.value);
    this.cmdesclientservice.saveCmdesclients(formcmdesclient.value).subscribe(
      (reponse) => {
             const link = ['configurer'];
             this.router.navigate(link);
      },
      (error) => {
        this.errorMessage = 'Problème de connexion à votre serveur, prière contacter l\'administrateur';
        console.log(error);
      }
    );
    this.toastr.success('Commande Client enregistrée avec succès','Notification!');
}

resetButton(form? : NgForm){
  if(form != null)form.reset();
  // this.formData = {
  //    Id: 0,
  //    clientId: 0,
  //    pointventeId: 0,
  //    statut: '',
  //    total: 0,
  //   date: '',
  //    adresFact: ''
  
  // }
  this.toastr.success('formulaire réinitialisé','Notification!');
  }


}
