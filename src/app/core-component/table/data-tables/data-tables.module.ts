import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesRoutingModule } from './data-tables-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { DataTablesComponent } from './data-tables.component';


@NgModule({
  declarations: [
    DataTablesComponent
  ],
  imports: [
    CommonModule,
    DataTablesRoutingModule,
    DataTablesModule
  ]
})
export class DataTableSModule { }
