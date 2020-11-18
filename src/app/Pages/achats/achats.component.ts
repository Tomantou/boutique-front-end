import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pointvente } from 'src/app/Models/pointvente';
import { categorie } from 'src/app/Models/categorie';
import { souscategorie } from 'src/app/Models/souscategorie';
import { PventeServiceService } from 'src/app/Shared/pvente-service.service';
import { CategoriesService } from 'src/app/Shared/categories.service';
import { SouscategoriesService } from 'src/app/Shared/souscategories.service';
import { ToastrModule } from 'ngx-toastr'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css'],
  providers:[PventeServiceService,CategoriesService,SouscategoriesService]
})
export class AchatsComponent implements OnInit {
pventes: pointvente [];
categories: categorie [];
souscategories: souscategorie [];

  constructor(
    private http: HttpClient,
    private ptventeservice: PventeServiceService,
    private categoservice: CategoriesService,
    private souscategservice: SouscategoriesService
    ) { }

  ngOnInit(): void{

    this.ptventeservice.getPVENTES().subscribe(

      (pointventes) => { this.pventes = pointventes;
      //alert('c\'est ok Bravo!!!!');
      },
      (error) => {
        alert('probleme d\'acces a l api');

       },
     );


    this.categoservice.getCategories().subscribe(
      (categories) => {this.categories = categories;

      },
      (error) => {
         alert('probleme d\'acces a l api categories');
      }
      );  
        
      this.souscategservice.getsousCategories().subscribe(
       (souscategories) => {this.souscategories = souscategories;
       
       },
       (error) => {
          alert('probleme d\'acces a l api sous categories');
       }
       );  

  }

}
