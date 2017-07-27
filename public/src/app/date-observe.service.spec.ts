import { TestBed, inject } from '@angular/core/testing';

import { DateObserveService } from './date-observe.service';

describe('DateObserveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateObserveService]
    });
  });

  it('should be created', inject([DateObserveService], (service: DateObserveService) => {
    expect(service).toBeTruthy();
  }));
});
