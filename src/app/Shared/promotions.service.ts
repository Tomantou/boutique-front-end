import { Injectable } from '@angular/core';
import { PromotionsComponent } from '../Pages/promotions/promotions.component';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import { promouvoir } from 'src/app/Models/promouvoir';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class PromotionsService {
  private lien = environment.boutiqueBackend + '/promouvoirs';
  constructor(
    private http: HttpClient,
    private toastr: ToastrService
    ) { 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
     /*  this.people = http.get('http://www.mocky.io/v2/5715f1f3a1100004d1187d9e1', { headers: headers })
     .map(response => response.json()); */}


     // ---------------CRUD Operations-------------------

     // Create promotions


     savePromotions(promouvoir: promouvoir) {
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
  
      const requestOptions = {
        headers: new HttpHeaders(headerDict),
      };
      return this.http.post(environment.boutiqueBackend + '/promouvoirs', promouvoir, requestOptions);
    }

     // Get promotions -list

    getPromotions(): Observable<any>{
       
      const opts = {
        headers: new HttpHeaders({ 
          'X-Requested-With':'Httpclient',
          'Access-Control-Allow-Origin':'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Methods': 'POST','GET':'any','PUT':'any','DELETE':'any'
          })
         };
         return this.http.get<promouvoir []>(this.lien);            
     }


     // Get promotion by Id

     getPromotionbyId(id: number): Observable<any>{
       return this.http.get<promouvoir>(environment.boutiqueBackend + '/${id}')
     }

     // Delete promotion
     
     deletePromotion(id: number){
        return this.http.delete(environment.boutiqueBackend + '/${id}' );
     }


 }