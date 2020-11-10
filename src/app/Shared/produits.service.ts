import { ErrorHandler, Injectable } from '@angular/core';
import { ProduitsComponent } from '../Pages/produits/produits.component';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
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
  lesproduits: produit[];
  leproduit: produit;
  private formData: produit;
  
  
  constructor(private http: HttpClient,
    private toastr : ToastrService) { }
  

    public getProduitList(): Observable<any>{
       const options={ headers: new HttpHeaders ({
         'X-Requested-Width': 'HttpClient'
       })
       };
       const url ="http://[::1]:3000/produits?"
         return this.http.get(url);   
                
                
     }
      
        
}
