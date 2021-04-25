import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitDetailModalComponent } from './produit-detail-modal.component';

describe('ProduitDetailModalComponent', () => {
  let component: ProduitDetailModalComponent;
  let fixture: ComponentFixture<ProduitDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
