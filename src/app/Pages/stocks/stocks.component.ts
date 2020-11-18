import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/Shared/stocks.service';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { stocks } from 'src/app/Models/stocks';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css'],
  providers: [StocksService]
})
export class StocksComponent implements OnInit {
   lesstocks: stocks [];

  constructor(
     public stockservice : StocksService,
     public toastr : ToastrService
     
    ) { }

  ngOnInit(): void {

         this.stockservice.getStocks().subscribe(
            (stocks) => {this.lesstocks = stocks;
            console.log('liste stocks',this.lesstocks);
            },
            (error) => {
               alert('probleme d\'acces a l api');
            }
            );  
              

  }

}