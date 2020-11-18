import { Injectable } from '@angular/core';
import { StocksComponent } from '../Pages/stocks/stocks.component';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import { produit } from 'src/app/Models/produit'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { stocks } from 'src/app/Models/stocks';


@Injectable({
  providedIn: 'root'
})

export class StocksService {
  stocks: stocks [];
  private lien ='https://boutique-back-end.azurewebsites.net/stocks';
  constructor(
    private http : HttpClient,
    private toastr : ToastrService
    ) { }


    getStocks(): Observable<any>{
       
      const opts = {
        headers: new HttpHeaders({ 
          //'X-Requested-With':'Httpclient',
          //'Access-Control-Allow-Origin':'http://localhost:3000',
          //'Access-Control-Allow-Credentials': 'true',
          //'Access-Control-Allow-Methods': 'POST','GET':'any','PUT':'any','DELETE':'any'
          })
         };
         return this.http.get<stocks []>(this.lien);           
                
     }
      




}
