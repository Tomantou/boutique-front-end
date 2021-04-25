import { Injectable } from '@angular/core';
import { ConfigurerComponent } from '../Pages/configurer/configurer.component';
import { HttpClient, HttpHeaders, HttpClientModule, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { signaletiques } from '../Models/signaletiques';
import { RequestMethod, RequestOptions } from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurerService {
  private lien = environment.boutiqueBackend + '/categories';
  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
   /*  this.people = http.get('http://www.mocky.io/v2/5715f1f3a1100004d1187d9e1', { headers: headers })
   .map(response => response.json()); */}


  /*     saveSignaletique(signaletiq: signaletiques): Observable<any> {
        const lien = 'https://boutique-back-end.azurewebsites.net/signaletiques';
       return this.http.post<signaletiques>(lien, signaletiq);
   }  */

  saveSignaletique(signaletiq: signaletiques) {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(environment.boutiqueBackend + '/signaletiques', signaletiq, requestOptions);
  }


  getSignaletique(): Observable<any>{
    return this.http.get<signaletiques []>(this.lien);           
}

}