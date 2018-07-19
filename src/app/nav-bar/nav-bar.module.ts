import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { AngMaterialModule } from '../ang-material/ang-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AngMaterialModule,
    RouterModule,
  ],
  exports: [NavBarComponent],
  declarations: [NavBarComponent]
})
export class NavBarModule { }
