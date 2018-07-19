import { ViewCutsModule } from './view-cuts.module';

describe('ViewCutsModule', () => {
  let viewCutsModule: ViewCutsModule;

  beforeEach(() => {
    viewCutsModule = new ViewCutsModule();
  });

  it('should create an instance', () => {
    expect(viewCutsModule).toBeTruthy();
  });
});
