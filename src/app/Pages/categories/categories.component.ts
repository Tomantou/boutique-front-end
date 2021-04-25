import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { categorie } from 'src/app/Models/categorie';
import { CategoriesService } from 'src/app/Shared/categories.service';
import { SouscategoriesService } from 'src/app/Shared/souscategories.service';
import { ToastrModule } from 'ngx-toastr'; 
import { HttpClientModule } from '@angular/common/http';
import { url } from 'inspector';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoriesService, SouscategoriesService]
})


export class CategoriesComponent implements OnInit {
  lescategories:  categorie []; 
  lessouscategories:[];
 constructor(public categorieservice: CategoriesService, public souscategorieservice: SouscategoriesService) { }

 ngOnInit(){

     this.categorieservice.getCategories().subscribe(
        (categories) => {this.lescategories = categories;
        console.log('liste categories',this.lescategories);
        },
        (error) => {
           alert('probleme d\'acces a l api categories');
        }
        );  
          
        this.souscategorieservice.getsousCategories().subscribe(
         (souscategories) => {this.lessouscategories = souscategories;
         console.log('liste sous categories',this.lessouscategories);
         },
         (error) => {
            alert('probleme d\'acces a l api sous categories');
         }
         );  
   
 }
   
   

}




