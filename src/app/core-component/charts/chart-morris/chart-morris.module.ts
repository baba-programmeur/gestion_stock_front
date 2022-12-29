import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartMorrisRoutingModule } from './chart-morris-routing.module';
import { ChartMorrisComponent } from './chart-morris.component';


@NgModule({
  declarations: [
    ChartMorrisComponent
  ],
  imports: [
    CommonModule,
    ChartMorrisRoutingModule
  ]
})
export class ChartMorrisModule { }
