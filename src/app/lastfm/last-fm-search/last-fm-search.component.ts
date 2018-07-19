import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LastfmService } from '../lastfm.service';
import { MatSelectionList, MatSelectionListChange } from '@angular/material';

@Component({
  selector: 'app-last-fm-search',
  templateUrl: './last-fm-search.component.html',
  styleUrls: ['./last-fm-search.component.css']
})
export class LastFmSearchComponent implements OnInit {

  @ViewChild('trackRes')
  public trackRes: MatSelectionList;

  lastFmSearch: FormGroup;
  suggestedTrackList: any;

  @Output() trackSelectionEvent = new EventEmitter<any>();

  constructor(private lastfm: LastfmService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.lastFmSearch = this.fb.group({
      TrackName: ['', Validators.required],
    });

    this.lastFmSearch.valueChanges.subscribe(searchValues => {
      this.lastfm.searchTracks(searchValues.TrackName, searchValues.ArtistName).subscribe(tracks => {
        this.suggestedTrackList = tracks.results.trackmatches.track;
      });
    });

    this.trackRes.selectionChange.subscribe((selection: MatSelectionListChange) => {
      this.trackRes.deselectAll();
      selection.option.selected = true;

      if (selection.option.value.mbid !== undefined && selection.option.value.mbid !== '') {
        this.lastfm.getTrackInfoMbid(selection.option.value.mbid).subscribe(res => {
          // this.setFormWithTrackData(res.track);
          this.sendTrack(res.track);
       });
      } else {
        this.lastfm.getTrackInfo(selection.option.value.name, selection.option.value.artist).subscribe(res => {
         // this.setFormWithTrackData(res.track);
         this.sendTrack(res.track);
        });
      }
    });

  }

  sendTrack(track) {
    this.trackSelectionEvent.emit(track);
  }



}
