import { NgModule } from '@angular/core';
import {MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSidenavModule,
        MatSelectModule,
        MatListModule,
        MatTabsModule
      } from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';

import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule,
            MatButtonModule,
            MatListModule,
            MatSidenavModule,
            MatIconModule,
            MatCheckboxModule,
            MatChipsModule,
            MatSelectModule,
            MatFormFieldModule,
            MatTabsModule,
            MatInputModule],
  exports:  [
            MatButtonModule,
            MatListModule,
            MatSidenavModule,
            MatIconModule,
            MatCheckboxModule,
            MatFormFieldModule,
            MatChipsModule,
            MatSelectModule,
            MatTabsModule,
            MatInputModule],
})
export class AngMaterialModule { }
