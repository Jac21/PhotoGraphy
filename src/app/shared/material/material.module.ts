import { NgModule } from "@angular/core";

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  exports: [MatButtonModule, MatCardModule, MatTooltipModule],
  declarations: []
})
export class MaterialModule { }
