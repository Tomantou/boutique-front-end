import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdesclientsComponent } from './cmdesclients.component';

describe('CmdesclientsComponent', () => {
  let component: CmdesclientsComponent;
  let fixture: ComponentFixture<CmdesclientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmdesclientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdesclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
