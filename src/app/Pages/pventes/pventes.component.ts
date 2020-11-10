import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pointvente } from 'src/app/Models/pointvente';
import { PventeServiceService } from 'src/app/Shared/pvente-service.service';
import { ToastrModule } from 'ngx-toastr'; 
import { HttpClientModule } from '@angular/common/http';
import { url } from 'inspector';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pventes',
  templateUrl: './pventes.component.html',
  styleUrls: ['./pventes.component.css']
})
export class PventesComponent implements OnInit {
  pventes: pointvente[];
  pointvente: pointvente;
  private formData: pointvente;
  constructor(private pventeservice: PventeServiceService,
    private http: HttpClientModule) { }

  ngOnInit(): void {
    // this.resetForm();
      let pventes = this.pventeservice.getPVENTES();
      pventes.subscribe((data) => this.pventes=(data));  
     console.log(pventes); 
  }
  

}
