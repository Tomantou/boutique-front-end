import { Injectable } from '@angular/core';
import { CustumersComponent } from '../Pages/custumers/custumers.component';
import { HttpClient,HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http'; 
import { custumer } from 'src/app/Models/custumer'; 
import { ErrorObserver, Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})






export class CustumersService {
  private lescustumers: custumer [];
  private lien = environment.boutiqueBackend + '/custumers';
  selectedCustumer: custumer;
  constructor(
    private http: HttpClient,
    private toastr: ToastrService
    
    
    ) { 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');
     /*  this.people = http.get('http://www.mocky.io/v2/5715f1f3a1100004d1187d9e1', { headers: headers })
     .map(response => response.json()); */}

     

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


     // ---------------CRUD Operations-------------------

     // Create client

    saveCustumer(custumer: custumer) {
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
  
      const requestOptions = {
        headers: new HttpHeaders(headerDict),
      };
      try{
         return this.http.post(environment.boutiqueBackend + '/custumers', custumer, requestOptions);
      }catch{
               (this.handleError);
            }
      
    }

     // Get clients -list

    getCustumers(): Observable<any>{
       
      const opts = {
        headers: new HttpHeaders({ 
          'X-Requested-With':'Httpclient',
          'Access-Control-Allow-Origin':'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Methods': 'POST','GET':'any','PUT':'any','DELETE':'any'
          })
         };
         
         try{
          return this.http.get<custumer []>(this.lien)
         }catch{
                   (this.handleError);
         }
            
     }
        
     

      
     // Get client by Id

     getCustumerbyId(id: number): Observable<any>{
       try{
         return this.http.get<custumer>(environment.boutiqueBackend + '/${id}')
         }catch{
                 (this.handleError);
               }
       
     }
 

      // Edit custumers


      editCustumer(id:number, body: custumer){
          return this.http.put(environment.boutiqueBackend + '/${id}', body);
      }
     // Delete client by id

     deleteCustumer(id: number){

        return this.http.delete(environment.boutiqueBackend + '/${id}' );
     }

}
