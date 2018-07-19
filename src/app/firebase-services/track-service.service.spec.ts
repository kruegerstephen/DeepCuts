import { TestBed, inject } from '@angular/core/testing';

import { TrackService } from './track-service.service';

describe('TrackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackService]
    });
  });

  it('should be created', inject([TrackService], (service: TrackService) => {
    expect(service).toBeTruthy();
  }));
});
