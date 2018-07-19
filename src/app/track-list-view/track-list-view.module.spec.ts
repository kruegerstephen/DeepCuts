import { TrackListViewModule } from './track-list-view.module';

describe('TrackListViewModule', () => {
  let trackListViewModule: TrackListViewModule;

  beforeEach(() => {
    trackListViewModule = new TrackListViewModule();
  });

  it('should create an instance', () => {
    expect(trackListViewModule).toBeTruthy();
  });
});
