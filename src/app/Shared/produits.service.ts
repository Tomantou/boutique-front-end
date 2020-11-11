import { ErrorHandler, Injectable } from '@angular/core';
import { ProduitsComponent } from '../Pages/produits/produits.component';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import { produit } from 'src/app/Models/produit'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  leproduit: produit;
  private formData: produit;
  private url ='https://boutique-back-end.azurewebsites.net/produits';
  
  
  constructor(private readonly http: HttpClient,
    private toastr : ToastrService) { }
  

    getProduitList(): Observable<any>{
       
         return this.http.get<produit []>(this.url);           
                
     }
      
        
}
