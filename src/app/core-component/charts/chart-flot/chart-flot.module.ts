import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartFlotRoutingModule } from './chart-flot-routing.module';
import { ChartFlotComponent } from './chart-flot.component';


@NgModule({
  declarations: [
    ChartFlotComponent
  ],
  imports: [
    CommonModule,
    ChartFlotRoutingModule
  ]
})
export class ChartFlotModule { }
