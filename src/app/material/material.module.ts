import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressBarModule,
  MatInputModule,
  MatRippleModule,
  MatToolbarModule,
  MatTooltipModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { MatBadgeModule } from '@angular/material/badge';

const Material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressBarModule,
  MatBadgeModule,
  MatInputModule,
  MatRippleModule,
  MatToolbarModule,
  MatTooltipModule,
  MatProgressSpinnerModule
];
@NgModule({
  imports: [
    Material
  ],
  exports: [
    Material
  ]
})
export class MaterialModule { }
