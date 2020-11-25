import { TestBed } from '@angular/core/testing';

import { CmdesclientsService } from './cmdesclients.service';

describe('CmdesclientsService', () => {
  let service: CmdesclientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmdesclientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
