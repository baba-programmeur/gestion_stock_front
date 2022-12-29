import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangesliderRoutingModule } from './rangeslider-routing.module';
import { RangesliderComponent } from './rangeslider.component';


@NgModule({
  declarations: [
    RangesliderComponent
  ],
  imports: [
    CommonModule,
    RangesliderRoutingModule
  ]
})
export class RangesliderModule { }
