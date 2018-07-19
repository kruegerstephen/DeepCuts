import { AddCutsModule } from './add-cuts.module';

describe('AddCutsModule', () => {
  let addCutsModule: AddCutsModule;

  beforeEach(() => {
    addCutsModule = new AddCutsModule();
  });

  it('should create an instance', () => {
    expect(addCutsModule).toBeTruthy();
  });
});
