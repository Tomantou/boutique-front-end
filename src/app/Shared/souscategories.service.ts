import { Injectable } from '@angular/core';
import { SouscategoriesComponent } from '../Pages/souscategories/souscategories.component';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { souscategorie } from '../Models/souscategorie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SouscategoriesService {
  private lessouscategories: souscategorie;
  private lien = environment.boutiqueBackend + '/souscategories';

  constructor(
    private http: HttpClient,
    private toastr : ToastrService
    ) { }

    getsousCategories(): Observable<any>{
       
      
      return this.http.get<souscategorie []>(this.lien);           
             
  }

}
