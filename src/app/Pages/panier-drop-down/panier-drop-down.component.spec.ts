import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierDropDownComponent } from './panier-drop-down.component';

describe('PanierDropDownComponent', () => {
  let component: PanierDropDownComponent;
  let fixture: ComponentFixture<PanierDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
