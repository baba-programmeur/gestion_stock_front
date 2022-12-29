import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierreportRoutingModule } from './supplierreport-routing.module';
import { SupplierreportComponent } from './supplierreport.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    SupplierreportComponent
  ],
  imports: [
    CommonModule,
    SupplierreportRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule
  ],
  bootstrap: [SupplierreportComponent]
})
export class SupplierreportModule { }
