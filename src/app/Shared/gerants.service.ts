import { Injectable } from '@angular/core';
import { GerantsComponent } from '../Pages/gerants/gerants.component';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { gerant } from '../Models/gerant';

@Injectable({
  providedIn: 'root'
})

export class GerantsService {
  lesgerants: gerant [];
  private lien ='https://boutique-back-end.azurewebsites.net/gerants';


  constructor(private http: HttpClient,
    private toastr : ToastrService
    ) { }

    getGerants(): Observable<any>{

      return this.http.get<gerant []>(this.lien);                 
    }    
}
