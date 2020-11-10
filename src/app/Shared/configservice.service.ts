import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signaletiques } from '../Models/signaletiques';

@Injectable({
  providedIn: 'root'
})
export class ConfigserviceService {

  signaletique: signaletiques;
  private lien ='http://localhost:3000';

  constructor( 
    private http: HttpClient,
    private configservice: ConfigserviceService) 
    { }

    saveConfig(signal: signaletiques): void {
         this.http.post(this.lien,signal);

    }

}
