import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCutsComponent } from './add-cuts.component';

describe('AddCutsComponent', () => {
  let component: AddCutsComponent;
  let fixture: ComponentFixture<AddCutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
