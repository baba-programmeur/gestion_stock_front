import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesreportRoutingModule } from './salesreport-routing.module';
import { SalesreportComponent } from './salesreport.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    SalesreportComponent
  ],
  imports: [
    CommonModule,
    SalesreportRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule
  ],
  bootstrap: [SalesreportComponent]
})
export class SalesreportModule { }
