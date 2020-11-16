import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouscategoriesComponent } from './souscategories.component';

describe('SouscategoriesComponent', () => {
  let component: SouscategoriesComponent;
  let fixture: ComponentFixture<SouscategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouscategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouscategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
