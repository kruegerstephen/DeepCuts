import { Component, OnInit } from '@angular/core';
import { FireBaseTrack, TrackFilter } from '../interfaces';
import { TrackService } from '../firebase-services/track-service.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { FilterTrackService } from '../filter-side-bar/filter-track.service';

@Component({
  selector: 'app-view-cuts',
  templateUrl: './view-cuts.component.html',
  styleUrls: ['./view-cuts.component.css']
})
export class ViewCutsComponent implements OnInit {

  tracks$;
  searchValue: string;
  filteredTrackList: FireBaseTrack[];
  currentFilter: TrackFilter;

  constructor(
              private trackService: TrackService,
              private filterService: FilterTrackService,
              private afs: AngularFirestore) { }

  ngOnInit() {
    this.filterService.FilterSubject.subscribe(filter => {
      this.currentFilter = filter;
      this.tracks$ = this.trackService.getCollection$(this.currentFilter);
    });

    this.tracks$ = this.trackService.getCollection$(this.currentFilter);
  }


}
