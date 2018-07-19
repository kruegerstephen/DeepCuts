import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastFmSearchComponent } from './last-fm-search.component';
import { AngMaterialModule } from '../../ang-material/ang-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreServicesModule } from '../../core-services/core-services.module';

@NgModule({
  imports: [
    CommonModule,
    AngMaterialModule,
    FormsModule,
    CoreServicesModule,
    ReactiveFormsModule
  ],
  declarations: [LastFmSearchComponent],
  providers: [],
  exports: [LastFmSearchComponent]
})
export class LastFmSearchModule { }
