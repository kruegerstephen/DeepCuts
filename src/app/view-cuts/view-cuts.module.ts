import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCutsComponent } from './view-cuts.component';
import { AngMaterialModule } from '../ang-material/ang-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterModule } from '../filter-side-bar/filter.module';
import { Routes, RouterModule } from '@angular/router';
import { TrackDetailsComponent } from '../track-details/track-details.component';
import { TrackDetailsModule } from '../track-details/track-details.module';

const routes: Routes = [
  {path: '',
   component: ViewCutsComponent,
   children: [{path: ':Track', component: TrackDetailsComponent}]
  }];


@NgModule({
  imports: [
    CommonModule,
    AngMaterialModule,
    FormsModule,
    FilterModule,
    ReactiveFormsModule,
    TrackDetailsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ViewCutsComponent]
})
export class ViewCutsModule { }
