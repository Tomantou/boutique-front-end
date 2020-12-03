import { Injectable } from '@angular/core';
import { CmdesclientsComponent } from '../Pages/cmdesclients/cmdesclients.component';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import { cmdesclient } from 'src/app/Models/cmdesclient'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CmdesclientsService {
  private lescmdesclients: cmdesclient [];
  private lien = environment.boutiqueBackend + '/cmdesclients';

  constructor(
    private http: HttpClient,
    toastr: ToastrService
    ) { 
      let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
   /*  this.people = http.get('http://www.mocky.io/v2/5715f1f3a1100004d1187d9e1', { headers: headers })
   .map(response => response.json()); */
    }


    saveCmdesclients(cmdesclient: cmdesclient) {
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
  
      const requestOptions = {
        headers: new HttpHeaders(headerDict),
      };
      return this.http.post(environment.boutiqueBackend + '/cmdesclients', cmdesclient, requestOptions);
    }


    getCmdesclients(): Observable<any>{
       
      const opts = {
        headers: new HttpHeaders({ 
          'X-Requested-With':'Httpclient',
          //'Access-Control-Allow-Origin':'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Methods': 'POST','GET':'any','PUT':'any','DELETE':'any'
          })
         };
         return this.http.get<cmdesclient []>(this.lien);           
                
     }
}
