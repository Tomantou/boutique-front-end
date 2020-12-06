import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import {Observable} from 'rxjs';
import { categorie } from '../Models/categorie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private lien = environment.boutiqueBackend + '/categories';

  constructor(
    private readonly http: HttpClient    ) {
      let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
   /*  this.people = http.get('http://www.mocky.io/v2/5715f1f3a1100004d1187d9e1', { headers: headers })
   .map(response => response.json()); */
     }


    getCategories(): Observable<any>{
       
      
         return this.http.get<categorie []>(this.lien);           
                
     }


}
