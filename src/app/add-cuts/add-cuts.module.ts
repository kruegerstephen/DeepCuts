import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCutsComponent } from './add-cuts.component';
import { AngMaterialModule } from '../ang-material/ang-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CoreServicesModule } from '../core-services/core-services.module';
import { LastFmSearchModule } from '../lastfm/last-fm-search/last-fm-search.module';


const routes: Routes = [
  {path: '', component: AddCutsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngMaterialModule,
    ReactiveFormsModule,
    CoreServicesModule,
    LastFmSearchModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [AddCutsComponent],
})
export class AddCutsModule { }
