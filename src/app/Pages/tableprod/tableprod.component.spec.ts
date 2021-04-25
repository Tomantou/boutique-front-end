import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableprodComponent } from './tableprod.component';

describe('TableprodComponent', () => {
  let component: TableprodComponent;
  let fixture: ComponentFixture<TableprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
