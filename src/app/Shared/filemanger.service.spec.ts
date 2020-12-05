import { TestBed } from '@angular/core/testing';

import { FilemangerService } from './filemanger.service';

describe('FilemangerService', () => {
  let service: FilemangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilemangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
