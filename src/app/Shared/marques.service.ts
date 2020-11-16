import { Injectable } from '@angular/core';
import { MarquesComponent } from '../Pages/marques/marques.component';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import { produit } from 'src/app/Models/produit'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { marque } from '../Models/marque';

@Injectable({
  providedIn: 'root'
})

export class MarquesService {
  lesmarques: marque [];
  private lien ='https://boutique-back-end.azurewebsites.net/marques';


  constructor(
    private http: HttpClient,
    private toastr : ToastrService
    ) { }

    getMarques(): Observable<any>{
       
      
         return this.http.get<marque []>(this.lien);           
                
     }

}
