import { Injectable } from '@angular/core';
import { PromosComponent } from '../Pages/promos/promos.component';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import { promos } from 'src/app/Models/promos'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})






export class PromosService {
  public lien = environment.boutiqueBackend + '/promos';
  
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

     // Create client

    savePromos(promos: promos) {
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
  
      const requestOptions = {
        headers: new HttpHeaders(headerDict),
      };
      return this.http.post(environment.boutiqueBackend + '/promos', promos, requestOptions);
    }

     // Get clients -list

    getPromos(): Observable<any>{
       
      const opts = {
        headers: new HttpHeaders({ 
          'X-Requested-With':'Httpclient',
          'Access-Control-Allow-Origin':'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Methods': 'POST','GET':'any','PUT':'any','DELETE':'any'
          })
         };
         return this.http.get<promos []>(this.lien);            
     }


     // Get client by Id

     getPromobyId(id: number): Observable<any>{
       return this.http.get<promos>(this.lien + '/${id}' );
     }

     // Delete client by id

     deleteCustumer(id: number){
        return this.http.delete(this.lien+ '/${id}');
     }

     updatePromo(promo: promos, id:number){
        return this.http.put(this.lien + '/${id}',promo)
     }

}
