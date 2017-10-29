import { TestBed, inject } from '@angular/core/testing';

import { TrackserviceService } from './trackservice.service';

describe('TrackserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackserviceService]
    });
  });

  it('should be created', inject([TrackserviceService], (service: TrackserviceService) => {
    expect(service).toBeTruthy();
  }));
});
