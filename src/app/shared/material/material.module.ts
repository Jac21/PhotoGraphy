import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  exports: [MatButtonModule, MatCardModule, MatTooltipModule],
  declarations: []
})
export class MaterialModule { }
