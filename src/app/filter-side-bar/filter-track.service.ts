import { Injectable } from '@angular/core';
import { TrackFilter } from '../interfaces';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterTrackService {


  FilterSubject = new Subject<TrackFilter>();

  constructor() { }
}
