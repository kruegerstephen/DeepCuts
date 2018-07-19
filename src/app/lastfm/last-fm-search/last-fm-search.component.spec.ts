import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFmSearchComponent } from './last-fm-search.component';

describe('LastFmSearchComponent', () => {
  let component: LastFmSearchComponent;
  let fixture: ComponentFixture<LastFmSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastFmSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastFmSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
