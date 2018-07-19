import { Component, OnInit, ViewChild } from '@angular/core';
import { LastfmService } from '../lastfm/lastfm.service';
import { TrackService } from '../firebase-services/track-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Track } from '../lastfm/lastfm.interface';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatSelectionList, MatSelectionListChange } from '@angular/material';
import { FireBaseTrack, Genre, Tag } from '../interfaces';


@Component({
  selector: 'app-add-cuts',
  templateUrl: './add-cuts.component.html',
  styleUrls: ['./add-cuts.component.css']
})
export class AddCutsComponent implements OnInit {

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];



  addCutForm: FormGroup;
  suggestedTrackList: Track[];
  removable = true;
  genres: Genre[] = [];
  tags: Tag[] = [];
  albumArt: string;


  constructor(private trackService: TrackService,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.addCutForm = this.fb.group({
      ArtistName: ['', Validators.required],
      TrackName: ['', Validators.required],
      AlbumName: ['', Validators.required],
      Tag: [[], Validators.required],
      Genre: [[], Validators.required],
      Release: ['', Validators.required],
      Description: ['', Validators.required],
    });
  }


  setFormWithTrackData(track) {
    this.tags = [];
    track.toptags.tag.forEach(tag => {
      this.tags.push(tag);
    });

    if (track.album === undefined) {
      track.album = {};
      track.album.title = '';
      track.album.image = {'#text': '' };
      this.albumArt = '';
    } else {
      this.albumArt = track.album.image[3]['#text'];
    }

    this.addCutForm.setValue({
      ArtistName: track.artist.name,
      TrackName: track.name,
      AlbumName: track.album.title,
      Genre: this.genres,
      Tag: this.tags,
      Description: '',
      Release: '',
    });
  }

  recieveTrack($event) {
    this.setFormWithTrackData($event);
  }

  addCut()  {
    const formValue = this.addCutForm.value;

    const newCut: FireBaseTrack = {
      Artist: formValue.ArtistName,
      Album: formValue.AlbumName,
      AlbumArt: this.albumArt,
      Track: formValue.TrackName,
      Description: formValue.Description,
      Release: formValue.Release,
      Genre: this.genres,
      Tags: this.tags,
      CutRating: 0,
      DeepRating: 0,
    };

    this.trackService.createTrack(newCut);

  }

  addGenre(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.genres.push({name: value.trim()});
    }

    if (input) {
      input.value = '';
    }
  }

  removeGenre(genre: Genre): void {
    const index = this.genres.indexOf(genre);

    if (index >= 0) {
      this.genres.splice(index, 1);
    }
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

}
