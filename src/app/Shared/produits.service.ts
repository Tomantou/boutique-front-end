import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { produit } from 'src/app/Models/produit';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProduitsService {
  private lien = environment.boutiqueBackend + '/produits';
   productAdded = new Subject();
  constructor(
    private readonly http: HttpClient) { }

   
  getProduits(): Observable<any> {

    return this.http.get<produit[]>(this.lien);

  }

  saveProduit(produit: produit): Observable<Response> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.post<Response>(environment.boutiqueBackend + '/produits', produit, requestOptions);
  }

// CRUD Operations

  createProduct(obj){
     return this.http.post(environment.boutiqueBackend + '/produits', obj)

  }

  getLatestProducts(){

  }

  getProductById(id: number){
    return this.http.get(this.lien + '/' + id);
  }

  updateProduct(id: number, prod:produit){
    return this.http.put(this.lien + '/' + id, prod);
  }

  deleteProduct(id: number){
    return this.http.delete(this.lien + '/' + id );
  }
}

 




// Delete client by id
