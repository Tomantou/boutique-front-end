import { Injectable } from '@angular/core';
import { GerantsComponent } from '../Pages/gerants/gerants.component';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { gerant } from '../Models/gerant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GerantsService {

  private lien = environment.boutiqueBackend + '/gerants';


  constructor(
    private http: HttpClient,
    private toastr : ToastrService
    ) { }

    getGerants(): Observable<any>{

      return this.http.get<gerant []>(this.lien);                 
    }  
    
    
    saveGerant(gerant: gerant) {
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
  
      const requestOptions = {
        headers: new HttpHeaders(headerDict),
      };
      return this.http.post(environment.boutiqueBackend + '/gerants', gerant, requestOptions);
    }
}
