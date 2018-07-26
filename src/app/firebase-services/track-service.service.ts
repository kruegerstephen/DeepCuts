import { Injectable } from '@angular/core';
import { FireBaseTrack, TrackFilter } from '../interfaces';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
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
          query = this.textSearchQuery(filter.trackName, 'Track', query);
        }
        if (filter.artistName) {
          query = this.textSearchQuery(filter.artistName, 'Artist', query);
        }
        if (filter.albumName) {
          query = this.textSearchQuery(filter.albumName, 'Album', query);
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

  textSearchQuery(searchString: string, searchTerm: string, query: firebase.firestore.CollectionReference | firebase.firestore.Query)
                                             : firebase.firestore.CollectionReference | firebase.firestore.Query {
     const strSearch = searchString;
     const strlength = strSearch.length;
     const strFrontCode = strSearch.slice(0, strlength - 1);
     const strEndCode = strSearch.slice(strlength - 1, strSearch.length);

     const startcode = strSearch;
     const endcode = strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);

     return query.where(searchTerm, '>=', startcode).where(searchTerm, '<', endcode);

  }


  updateTrack(track: FireBaseTrack) {
    return this.trackDoc.update(track);
  }

  findTrack(trackName: FireBaseTrack): Observable<any> {
    return this.afs.collection('Tracks', ref => ref.where('track', '==', trackName)).valueChanges();
  }


}
