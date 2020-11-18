import { Injectable } from '@angular/core';
import { ConfigurerComponent } from '../Pages/configurer/configurer.component';
import { HttpClient, HttpHeaders,HttpClientModule,HttpResponse,HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { signaletiques } from '../Models/signaletiques';
import { RequestMethod, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurerService {
signaletique: signaletiques;
  constructor(
    private http: HttpClient
    
    )
   { let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
   /*  this.people = http.get('http://www.mocky.io/v2/5715f13a1100004d1187d9e1', { headers: headers })
   .map(response => response.json()); */}


   saveSignaletique(signaletiq: signaletiques): Observable<any> {
        const lien = 'https://boutique-back-end.azurewebsites.net/signaletiques';
       return this.http.post<signaletiques>(lien, signaletiq);
   } 

   /*  saveSignaletique(signaletiq: signaletiques) {



     const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
     
    const data = JSON.stringify(this.signaletique);
    return this.http.post('https://boutique-back-end.azurewebsites.net/signaletiques', this.signaletique, requestOptions); 
     var body = JSON.stringify(this.signaletique);
    var headeroptions = new Headers({'content-type' : 'application/json'});
    let headers = new HttpHeaders();
    var requestoptions = new RequestOptions ({ method : RequestMethod.Post,headers: headeroptions});
    const lien = 'https://boutique-back-end.azurewebsites.net/signaletiques';
     return this.http.post(lien, this.signaletique); 
   } 

 } */
}