import { Injectable } from '@angular/core';
import { ConfigurerComponent } from '../Pages/configurer/configurer.component';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { signaletiques } from '../Models/signaletiques';

@Injectable({
  providedIn: 'root'
})
export class ConfigurerService {

  constructor(
    private http: HttpClient)
   { }


   saveSignaletique(signaletique: signaletiques): Observable<any> {
        const lien = 'https://boutique-back-end.azurewebsites.net/signaletiques';
       return this.http.post<signaletiques>(lien, signaletique);
   }

}
