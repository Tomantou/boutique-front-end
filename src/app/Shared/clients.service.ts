import { Injectable } from '@angular/core';
import { ClientsComponent } from '../Pages/clients/clients.component';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import { client } from 'src/app/Models/client'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ClientsService {
  private lesclients: client [];
  private lien = environment.boutiqueBackend + '/clientts';
  
  constructor(
    private http: HttpClient,
    private toastr: ToastrService
    ) { }


    saveClient(client: client) {
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
  
      const requestOptions = {
        headers: new HttpHeaders(headerDict),
      };
      return this.http.post(environment.boutiqueBackend + '/clients', client, requestOptions);
    }


    getClients(): Observable<any>{
       
      const opts = {
        headers: new HttpHeaders({ 
          //'X-Requested-With':'Httpclient',
          //'Access-Control-Allow-Origin':'http://localhost:3000',
          //'Access-Control-Allow-Credentials': 'true',
          //'Access-Control-Allow-Methods': 'POST','GET':'any','PUT':'any','DELETE':'any'
          })
         };
         return this.http.get<client []>(this.lien);           
                
     }

}
