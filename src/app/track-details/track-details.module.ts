import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackDetailsComponent } from './track-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TrackDetailsComponent],
  exports: [TrackDetailsComponent]
})
export class TrackDetailsModule { }
