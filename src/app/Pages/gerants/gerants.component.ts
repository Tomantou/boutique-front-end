import { Component, OnInit } from '@angular/core';
import {  GerantsService } from 'src/app/Shared/gerants.service';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http'; 
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Pipe, PipeTransform } from '@angular/core';
import { gerant } from  'src/app/Models/gerant';


@Component({
  selector: 'app-gerants',
  templateUrl: './gerants.component.html',
  styleUrls: ['./gerants.component.css'],
  providers: [GerantsService],
})
export class GerantsComponent implements OnInit {
gerants: gerant [];  
  constructor(
    public gerantsservice: GerantsService
    ) { }

  ngOnInit(): void {

    this.gerantsservice.getGerants().subscribe(
      (gerants) => {this.gerants = gerants;
      console.log('liste gerants',this.gerants);
      },
      (error) => {
         alert('probleme d\'acces a l api');
      }
      );  

  }

}
