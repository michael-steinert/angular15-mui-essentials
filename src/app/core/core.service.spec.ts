import { TestBed } from '@angular/core/testing';

import { CoreService } from './core.service';

describe('Core Service', () => {
  let coreService: CoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    coreService = TestBed.inject(CoreService);
  });

  it('should be created', () => {
    expect(coreService).toBeTruthy();
  });
});
