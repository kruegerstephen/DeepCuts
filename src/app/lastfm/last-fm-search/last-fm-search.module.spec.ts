import { LastFmSearchModule } from './last-fm-search.module';

describe('LastFmSearchModule', () => {
  let lastFmSearchModule: LastFmSearchModule;

  beforeEach(() => {
    lastFmSearchModule = new LastFmSearchModule();
  });

  it('should create an instance', () => {
    expect(lastFmSearchModule).toBeTruthy();
  });
});
