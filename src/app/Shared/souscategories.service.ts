import { Injectable } from '@angular/core';
import { SouscategoriesComponent } from '../Pages/souscategories/souscategories.component';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { souscategorie } from '../Models/souscategorie';

@Injectable({
  providedIn: 'root'
})
export class SouscategoriesService {
  private lessouscategories: souscategorie;
  private lien ='https://boutique-back-end.azurewebsites.net/souscategories';

  constructor(
    private http: HttpClient,
    private toastr : ToastrService
    ) { }

    getsousCategories(): Observable<any>{
       
      
      return this.http.get<souscategorie []>(this.lien);           
             
  }

}
