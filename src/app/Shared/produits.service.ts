import { ErrorHandler, Injectable } from '@angular/core';
import { ProduitsComponent } from '../Pages/produits/produits.component';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import { produit } from 'src/app/Models/produit'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProduitsService {
  private lesproduits: produit;
  private lien ='https://boutique-back-end.azurewebsites.net/produits';
  
  constructor(
    private readonly http: HttpClient,
    private toastr : ToastrService){ }
  

    getProduits(): Observable<any>{
       
      const opts = {
        headers: new HttpHeaders({ 
          //'X-Requested-With':'Httpclient',
          //'Access-Control-Allow-Origin':'http://localhost:3000',
          //'Access-Control-Allow-Credentials': 'true',
          //'Access-Control-Allow-Methods': 'POST','GET':'any','PUT':'any','DELETE':'any'
          })
         };
         return this.http.get<produit []>(this.lien);           
                
     }
      
        
}
