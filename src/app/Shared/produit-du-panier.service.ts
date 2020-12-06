import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProduitIdDuPanier } from '../Models/produit-id-du-panier';

enum Method {
  GET, POST, PUT, DELETE
}

@Injectable({
  providedIn: 'root'
})
export class ProduitDuPanierService {


  private lien = environment.boutiqueBackend + '/produit-du-paniers';

  constructor(private readonly http: HttpClient) { }

  public addProduct(produitDuPanier: ProduitIdDuPanier) {
    return this.http.post<ProduitIdDuPanier>(this.lien,
      {
        productId: produitDuPanier.productId,
        userId: produitDuPanier.userId,
        quantity: 1
      });
  }

  public deleteProduct(id: number) {
    return this.http.delete(this.lien + "/" + id);
  }

  public getByUserId(userId: string) {
    const filter = '{"order": "Id", "where": {"userId": "' + userId + '"}}'
    return this.http.get<ProduitIdDuPanier[]>(this.lien + "?filter=" + filter);
  }
}
