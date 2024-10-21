import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { MatLegacyTooltipModule as MatTooltipModule } from "@angular/material/legacy-tooltip";

@NgModule({
  exports: [MatButtonModule, MatCardModule, MatTooltipModule],
  declarations: []
})
export class MaterialModule { }
