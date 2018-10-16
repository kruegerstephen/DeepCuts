import { Component, OnInit, OnDestroy } from '@angular/core';
import { FireBaseTrack } from '../interfaces';
import { TrackDetailService } from './track-detail.service';

@Component({
  selector: 'app-track-details',
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.css']
})
export class TrackDetailsComponent implements OnInit, OnDestroy {

  trackDetails: FireBaseTrack;
  constructor( private trackDetailsService: TrackDetailService) { }

  ngOnInit() {
    this.trackDetailsService.TrackDetailsSubject.subscribe(_trackDetails => {
      this.trackDetails = _trackDetails;
    });
  }

  ngOnDestroy(): void {
  }

}
