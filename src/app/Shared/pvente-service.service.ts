import { Injectable } from '@angular/core';
import { PventesComponent } from '../Pages/pventes/pventes.component';
import { HttpClient } from '@angular/common/http'; 
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
  pventes: pointvente[];
  pointvente: pointvente;
  private formData: pointvente;
  constructor(private http: HttpClient) { }

  getPVENTES(){
    const url ="https://localhost:44393/api/Pventes"
      return this.http.get<pointvente[]>(url)    
             
             
  }


}
