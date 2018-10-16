import { TestBed, inject } from '@angular/core/testing';

import { TrackDetailService } from './track-detail.service';

describe('TrackDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackDetailService]
    });
  });

  it('should be created', inject([TrackDetailService], (service: TrackDetailService) => {
    expect(service).toBeTruthy();
  }));
});
