import { Injectable } from '@angular/core';
import { SignaletiqueComponent } from '../Pages/signaletique/signaletique.component';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { signaletiques } from '../Models/signaletiques';

@Injectable({
  providedIn: 'root'
})
export class SignaletiqueService {

  signaletique: signaletiques;
  private lien ='https://boutique-back-end.azurewebsites.net/signaletiques';

  constructor( 
    private http: HttpClient,
    private signaletiqueServ: SignaletiqueService) 
    { }

    saveSignal(signal: signaletiques): void {
         this.http.post(this.lien,signal);

    }

}
