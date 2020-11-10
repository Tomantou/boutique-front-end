import { TestBed } from '@angular/core/testing';

import { PventeServiceService } from './pvente-service.service';

describe('PventeServiceService', () => {
  let service: PventeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PventeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
