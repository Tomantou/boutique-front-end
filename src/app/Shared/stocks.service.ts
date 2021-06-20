import { Injectable } from '@angular/core';
import { StocksComponent } from '../Pages/stocks/stocks.component';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import { produit } from 'src/app/Models/produit'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { stock } from 'src/app/Models/stock';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class StocksService {
  stocks: stock[];
  private lien = environment.boutiqueBackend + '/stocks';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getStocks(): Observable<any> {
    return this.http.get<stock[]>(this.lien);
  }
  getStocksByPvEtPId(pventeId: number, produitId: number) {
    const filter =
      '{"order": "produitId", "limit": 1, "where": {"produitId": ' +
      produitId +
      ', "pointventeId": ' +
      pventeId +
      '}}';
    return this.http.get<stock[]>(this.lien + '?filter=' + filter);
  }

  public putStock(stock: stock) {
    return this.http.put<stock>(this.lien + '/' + stock.Id, {
      produitId: stock.produitId,
      pointventeId: stock.pointventeId,
      quantiteStock: stock.quantiteStock,
      quantiteMin: stock.quantiteMin,
      quantiteMax: stock.quantiteMax,
    });
  }
}
