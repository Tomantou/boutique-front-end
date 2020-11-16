import { Injectable } from '@angular/core';
import { CategoriesComponent } from '../Pages/categories/categories.component';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import { produit } from 'src/app/Models/produit'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { categorie } from '../Models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private lescategories: categorie;
  private lien ='https://boutique-back-end.azurewebsites.net/categories';

  constructor(private readonly http: HttpClient,
    private toastr : ToastrService) { }


    getCategories(): Observable<any>{
       
      
         return this.http.get<categorie []>(this.lien);           
                
     }


}
