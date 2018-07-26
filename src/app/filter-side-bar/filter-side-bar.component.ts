import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TrackService } from '../firebase-services/track-service.service';
import { FireBaseTrack, Genre, TrackFilter } from '../interfaces';
import { FilterTrackService } from './filter-track.service';

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.css']
})
export class FilterSideBarComponent implements OnInit {

  filteredTrackList: FireBaseTrack[];
  trackList: FireBaseTrack[];
  filterForm: FormGroup;
  artistFV: any;
  trackFV: any;
  genresList: string[] = [];

  constructor(private trackService: TrackService, private fb: FormBuilder, private filterService: FilterTrackService) { }

  ngOnInit() {
    this.trackService.tracks.subscribe(tracks => {
      this.trackList = tracks;
    });
    this.buildForm();
  }

  private buildForm() {
    this.filterForm = this.fb.group({
      ArtistName: [''],
      AlbumName: [''],
      TrackName: [''],
      Genre: [[]],
      Release: [''],
      DeepRating: [''],
      CutRating: [''],
    });
  }

  filterTracks() {
    const filterValues = this.filterForm.value;
    const filter: TrackFilter = {
      artistName: filterValues.ArtistName,
      trackName: filterValues.TrackName,
      albumName: filterValues.AlbumName,
      rating: filterValues.DeepRating,
      year: filterValues.Release,
    };

    this.filterService.FilterSubject.next(filter);
  }

  addGenre(genre) {
    const isAdded = this.filterForm.value.Genre.includes(genre);
    if (!isAdded) {
      this.filterForm.value.Genre.push(genre);
    } else {
      const idx = this.filterForm.value.Genre.indexOf(genre);
      if (idx > -1) {
        this.filterForm.value.Genre.splice(idx, 1);
      }
    }
  }

}
