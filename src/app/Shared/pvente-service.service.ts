import { Injectable } from '@angular/core';
import { PventesComponent } from '../Pages/pventes/pventes.component';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { produit } from 'src/app/Models/produit'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { pointvente } from '../Models/pointvente';

@Injectable({
  providedIn: 'root'
})

export class PventeServiceService {

  private pointventes : pointvente [];
  private lien ='https://boutique-back-end.azurewebsites.net/pointsventes';
  constructor(private readonly http: HttpClient) { }


 public getPVENTES(): Observable<any> {

     const opts = {
    headers: new HttpHeaders({ 
      //'X-Requested-With':'Httpclient',
      //'Access-Control-Allow-Origin':'http://localhost:3000',
      //'Access-Control-Allow-Credentials': 'true',
      //'Access-Control-Allow-Methods': 'POST','GET':'any','PUT':'any','DELETE':'any'
      })
     };
     
    //console.log(opts.headers.get('X-Requested-With'));
    return this.http.get<pointvente []>(this.lien);    
             
             
  }


}
