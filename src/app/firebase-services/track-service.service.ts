import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { FireBaseTrack, TrackFilter } from '../interfaces';
import { Observable, Subject, BehaviorSubject, combineLatest, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FirebaseApp } from 'angularfire2';
import { map } from 'rxjs/operators';
import { FilterTrackService } from '../filter-side-bar/filter-track.service';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  trackCollection: AngularFirestoreCollection<FireBaseTrack>;
  tracks: Observable<FireBaseTrack[]>;
  track: Observable<FireBaseTrack>;
  trackDoc: AngularFirestoreDocument<FireBaseTrack>;

  searchTrackByTrackName$: BehaviorSubject<string|null>;
  searchTrackByArtistName$: BehaviorSubject<string|null>;

  trackNameQueryObservable;

  constructor(private afs: AngularFirestore, private filterService: FilterTrackService) {

    this.trackCollection = afs.collection('Tracks',
      ref => {
        return ref.orderBy('Artist');
      });

    this.tracks = this.trackCollection.valueChanges();

    this.searchTrackByTrackName$ = new BehaviorSubject<string>(null);
    this.searchTrackByArtistName$ = new BehaviorSubject<string>(null);

    this.trackNameQueryObservable = this.searchTrackByTrackName$.pipe(
      switchMap((trackName) =>
       afs.collection('Tracks', ref => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        if (trackName) {
          query = query.where('Track', '==', trackName);
        }
        return query;
      }).valueChanges()),
      catchError(err => { console.log(err); return of(err); })
    );
  }

  createTrack(track: FireBaseTrack): boolean {
    try {
      this.trackCollection.add(track);
      return true;
    } catch {
      return false;
    }
  }

  getCollection$(filter: TrackFilter): Observable<FireBaseTrack[]> {
    return this.afs.collection('Tracks', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      if (filter) {
        if (filter.trackName) {
          query = query.where('Track', '==', filter.trackName);
        }
        if (filter.artistName) {
          query = query.where('Artist', '==', filter.artistName);
        }
      }
        return query;
    }).snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as FireBaseTrack;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }


  updateTrack(track: FireBaseTrack) {
    return this.trackDoc.update(track);
  }

  findTrack(trackName: FireBaseTrack): Observable<any> {
    return this.afs.collection('Tracks', ref => ref.where('track', '==', trackName)).valueChanges();
  }


}
