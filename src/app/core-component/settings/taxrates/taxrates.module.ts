import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxratesRoutingModule } from './taxrates-routing.module';
import { TaxratesComponent } from './taxrates.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaxratesComponent
  ],
  imports: [
    CommonModule,
    TaxratesRoutingModule,
    DataTablesModule,
    FormsModule
  ]
})
export class TaxratesModule { }
