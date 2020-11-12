import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdesfournisComponent } from './cmdesfournis.component';

describe('CmdesfournisComponent', () => {
  let component: CmdesfournisComponent;
  let fixture: ComponentFixture<CmdesfournisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmdesfournisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdesfournisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
