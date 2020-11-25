import { TestBed } from '@angular/core/testing';

import { CmdesfournisService } from './cmdesfournis.service';

describe('CmdesfournisService', () => {
  let service: CmdesfournisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmdesfournisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
