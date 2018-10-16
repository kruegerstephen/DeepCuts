import { Injectable } from '@angular/core';
import { FireBaseTrack } from '../interfaces';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackDetailService {

  TrackDetailsSubject = new Subject<FireBaseTrack>();

  constructor() { }
}
