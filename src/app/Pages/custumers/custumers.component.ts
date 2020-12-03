import { Component, OnInit } from '@angular/core';
import { custumer } from 'src/app/Models/custumer';
import { NgForm } from '@angular/forms';
import { signaletiques } from 'src/app/Models/signaletiques';
import { CustumersService } from 'src/app/Shared/custumers.service';
import { ToastrModule, ToastrService } from 'ngx-toastr'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custumers',
  templateUrl: './custumers.component.html',
  styleUrls: ['./custumers.component.css'],
  providers:[]
})
export class CustumersComponent implements OnInit {
  public civilites: string [];
  public formData: custumer;
  public lescustumers: custumer [];
  errorMessage ='';

  constructor(
    private custumerservice: CustumersService,
    private router: Router,
    private toastr: ToastrService
    
    ) { }

  ngOnInit(): void {
    this.civilites = [
      "Mme",
      "Mr"
     ];
     this.formData = new custumer();

     this.custumerservice.getCustumers().subscribe(
      (custumers) => {this.lescustumers = custumers;
      console.log('liste clients',this.lescustumers);
      },
      (error) => {
         alert('probleme d\'acces a l api');
      }
      );  
  }

   getCustumerByid(id: number): custumer{
      return this.lescustumers.find(c => c.Id === id);
   }


  addCustumer(formcustumer: NgForm){
    console.log(formcustumer.value);
    this.custumerservice.saveCustumer(formcustumer.value).subscribe(
      (reponse) => {
             const link = ['clients'];
             this.router.navigate(link);
      },
      (error) => {
        this.errorMessage = 'Problème de connexion à votre serveur, prière contacter l\'administrateur';
        console.log(error);
      }
    );
    this.toastr.success('Client enregistrée avec succès','Notification!');
}


editerCustumer(custm: custumer): void{
   this.custumerservice.selectedCustumer = Object.assign({}, custm);
  
}

supprimerCustumer(id: number){
  //  if(confirm('Voulez-vous réellement supprimer ce client ?') == true){
     
  //     })
  //  }
}

resetButton(form?: NgForm){
  if(form != null)form.reset();
  this.formData = {
    Id:0,
     nomCli: '',
     prenomCli: '',
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
