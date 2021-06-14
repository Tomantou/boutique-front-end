import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { ErrorObserver, Observable, throwError } from 'rxjs';
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

     // Handling errors

       private handleError(errorResponse: HttpErrorResponse) {
           if(errorResponse.error instanceof ErrorEvent){
              console.error('Erreur coté client: ', errorResponse.error.message);
           }else
            {
                console.error('Erreur coté serveur: ', errorResponse);
            }

            // return new ErrorObservable('Il y a un problème avec le service, nous travaillons dessus, veuillez essayer plus tard.');

       }

    getCategories(): Observable<any>{
         try{
            return this.http.get<categorie []>(this.lien);
         }catch{
           (this.handleError);
         }
                    
     }


}
