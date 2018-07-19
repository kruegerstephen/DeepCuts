import { TestBed, inject } from '@angular/core/testing';

import { FilterTrackService } from './filter-track.service';

describe('FilterTrackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterTrackService]
    });
  });

  it('should be created', inject([FilterTrackService], (service: FilterTrackService) => {
    expect(service).toBeTruthy();
  }));
});
