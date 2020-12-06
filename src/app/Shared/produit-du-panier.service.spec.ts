import { TestBed } from '@angular/core/testing';

import { ProduitDuPanierService } from './produit-du-panier.service';

describe('ProduitDuPanierService', () => {
  let service: ProduitDuPanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitDuPanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
