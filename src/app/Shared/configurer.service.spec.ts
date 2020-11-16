import { TestBed } from '@angular/core/testing';

import { ConfigurerService } from './configurer.service';

describe('ConfigurerService', () => {
  let service: ConfigurerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
