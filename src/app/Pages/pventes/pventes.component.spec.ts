import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PventesComponent } from './pventes.component';

describe('PventesComponent', () => {
  let component: PventesComponent;
  let fixture: ComponentFixture<PventesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PventesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PventesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
