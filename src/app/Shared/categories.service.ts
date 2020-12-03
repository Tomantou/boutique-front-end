import { Injectable } from '@angular/core';
import { CategoriesComponent } from '../Pages/categories/categories.component';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import { produit } from 'src/app/Models/produit'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { categorie } from '../Models/categorie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private lescategories: categorie;
  private lien = environment.boutiqueBackend + '/categories';

  constructor(
    private readonly http: HttpClient,
    private toastr : ToastrService
    ) {
      let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
   /*  this.people = http.get('http://www.mocky.io/v2/5715f1f3a1100004d1187d9e1', { headers: headers })
   .map(response => response.json()); */
     }


    getCategories(): Observable<any>{
       
      
         return this.http.get<categorie []>(this.lien);           
                
     }


}
