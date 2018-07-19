import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { AngularFirestore } from 'angularfire2/firestore';
import { TrackService } from '../firebase-services/track-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-track-details',
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.css']
})
export class TrackDetailsComponent implements OnInit, OnDestroy {

  routeSub;
  trackDetails;
  trackSub;
  constructor(private afs: AngularFirestore, private route: ActivatedRoute, private trackService: TrackService) { }

  ngOnInit() {
    this.routeSub = this.route.paramMap.pipe(
      switchMap((params) => {
        const TrackName = params.get('Track');
        this.trackService.searchTrackByTrackName$.next(TrackName);
        return of(null);
      }),
      catchError(err => of(err))
    ).subscribe();

    this.trackSub = this.trackService.trackNameQueryObservable.subscribe(queriedTracks => {
      this.trackDetails = queriedTracks;
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
    this.trackSub.unsubscribe();
  }

}
