import { Injectable } from '@angular/core';
import { PventesComponent } from '../Pages/pventes/pventes.component';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { produit } from 'src/app/Models/produit'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { pointsvente } from '../Models/pointsvente';
import { environment } from 'src/environments/environment';
import { fileURLToPath } from 'url';

@Injectable({
  providedIn: 'root'
})

export class PventeServiceService {

  private pointventes : pointsvente [];
  private lien = environment.boutiqueBackend + '/pointsventes';
  constructor(private readonly http: HttpClient) { }


 public getPVENTES(): Observable<pointsvente []> {
     const filter = {
          include: { relation: 'gerant',
          scope: {
            fields: {'nom': true, 'prenoms': true}
          }
                
        }
     };
     const opts = {
    headers: new HttpHeaders({ 
      //'X-Requested-With':'Httpclient',
      //'Access-Control-Allow-Origin':'http://localhost:3000',
      //'Access-Control-Allow-Credentials': 'true',
      //'Access-Control-Allow-Methods': 'POST','GET':'any','PUT':'any','DELETE':'any'
      })
     };
     
    //console.log(opts.headers.get('X-Requested-With'));
    return this.http.get<pointsvente []>(this.lien + '?filter =' + filter);    
          
             
  }


  savePventes(pointvente: pointsvente ) {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post(environment.boutiqueBackend + '/pventes', pointvente, requestOptions);
  }


}
