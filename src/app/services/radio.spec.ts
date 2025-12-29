import { TestBed } from '@angular/core/testing';

import { RadioService } from './radio';

describe('Radio', () => {
  let service: RadioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
