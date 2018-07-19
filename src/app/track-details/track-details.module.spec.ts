import { TrackDetailsModule } from './track-details.module';

describe('TrackDetailsModule', () => {
  let trackDetailsModule: TrackDetailsModule;

  beforeEach(() => {
    trackDetailsModule = new TrackDetailsModule();
  });

  it('should create an instance', () => {
    expect(trackDetailsModule).toBeTruthy();
  });
});
