import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartJsRoutingModule } from './chart-js-routing.module';
import { ChartJsComponent } from './chart-js.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ChartJsComponent
  ],
  imports: [
    CommonModule,
    ChartJsRoutingModule,
    NgChartsModule
  ]
})
export class ChartJsModule { }
