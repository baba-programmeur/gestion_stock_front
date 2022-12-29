import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartPeityRoutingModule } from './chart-peity-routing.module';
import { ChartPeityComponent } from './chart-peity.component';


@NgModule({
  declarations: [
    ChartPeityComponent
  ],
  imports: [
    CommonModule,
    ChartPeityRoutingModule
  ]
})
export class ChartPeityModule { }
