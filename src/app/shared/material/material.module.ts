import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatButtonModule,
  MatCardModule,
  MatTooltipModule
} from "@angular/material";

@NgModule({
  exports: [MatButtonModule, MatCardModule, MatTooltipModule],
  declarations: []
})
export class MaterialModule { }
