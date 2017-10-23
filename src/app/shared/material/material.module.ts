import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatGridListModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  exports: [
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatGridListModule,
  MatTooltipModule,
  ],
  declarations: []
})
export class MaterialModule { }
