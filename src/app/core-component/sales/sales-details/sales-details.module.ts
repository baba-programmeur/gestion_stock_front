import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesDetailsRoutingModule } from './sales-details-routing.module';
import { SalesDetailsComponent } from './sales-details.component';


@NgModule({
  declarations: [
    SalesDetailsComponent
  ],
  imports: [
    CommonModule,
    SalesDetailsRoutingModule
  ]
})
export class SalesDetailsModule { }
