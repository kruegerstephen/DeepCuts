import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackListSmallViewComponent } from './track-list-small-view/track-list-small-view.component';
import { AngMaterialModule } from '../ang-material/ang-material.module';

@NgModule({
  imports: [
    CommonModule,
    AngMaterialModule
  ],
  declarations: [TrackListSmallViewComponent],
  exports: [TrackListSmallViewComponent]
})
export class TrackListViewModule { }
