import { Component, OnInit, Input } from '@angular/core';
import { FireBaseTrack } from '../../interfaces';
import { trigger, state, style, transition, animate } from '../../../../node_modules/@angular/animations';

@Component({
  selector: 'app-track-list-small-view',
  templateUrl: './track-list-small-view.component.html',
  styleUrls: ['./track-list-small-view.component.css'],
  animations: [
    trigger('trackState', [
      state('inactive', style({
        transform: 'scale(1)',
      })),
      state('active',   style({
        transform: 'scale(1.3)',
        'box-shadow': '1px 1px 2px 2px golden',

      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('buttonpulse', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active',   style({
        transform: 'scale(1.01)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class TrackListSmallViewComponent implements OnInit {

  @Input() track: FireBaseTrack;
  track_state = 'inactive';
  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.track_state = this.track_state === 'active' ? 'inactive' : 'active';
  }

}
