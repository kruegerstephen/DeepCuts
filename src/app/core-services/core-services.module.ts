import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackService } from '../firebase-services/track-service.service';
import { LastfmService } from '../lastfm/lastfm.service';
import { FilterTrackService } from '../filter-side-bar/filter-track.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
})
export class CoreServicesModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreServicesModule,
      providers: [TrackService, LastfmService, FilterTrackService]
    };
  }

}
