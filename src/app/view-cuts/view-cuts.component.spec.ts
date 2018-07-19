import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCutsComponent } from './view-cuts.component';

describe('ViewCutsComponent', () => {
  let component: ViewCutsComponent;
  let fixture: ComponentFixture<ViewCutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
