import { TestBed } from '@angular/core/testing';

import { CustumersService } from './custumers.service';

describe('ClientsService', () => {
  let service: CustumersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustumersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
