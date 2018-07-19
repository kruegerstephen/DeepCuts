import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterSideBarComponent } from './filter-side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngMaterialModule } from '../ang-material/ang-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngMaterialModule,
    ReactiveFormsModule
  ],
  declarations: [FilterSideBarComponent],
  exports: [FilterSideBarComponent]
})
export class FilterModule { }
