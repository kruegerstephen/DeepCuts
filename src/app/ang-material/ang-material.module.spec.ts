import { AngMaterialModule } from './ang-material.module';

describe('AngMaterialModule', () => {
  let angMaterialModule: AngMaterialModule;

  beforeEach(() => {
    angMaterialModule = new AngMaterialModule();
  });

  it('should create an instance', () => {
    expect(angMaterialModule).toBeTruthy();
  });
});
