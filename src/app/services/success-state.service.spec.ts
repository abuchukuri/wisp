import { TestBed } from '@angular/core/testing';

import { SuccessStateService } from './success-state.service';

describe('SuccessStateService', () => {
  let service: SuccessStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuccessStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
