import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackListSmallViewComponent } from './track-list-small-view.component';

describe('TrackListSmallViewComponent', () => {
  let component: TrackListSmallViewComponent;
  let fixture: ComponentFixture<TrackListSmallViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackListSmallViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackListSmallViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
