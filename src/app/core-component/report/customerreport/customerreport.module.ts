import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerreportRoutingModule } from './customerreport-routing.module';
import { CustomerreportComponent } from './customerreport.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    CustomerreportComponent
  ],
  imports: [
    CommonModule,
    CustomerreportRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule
  ],
 bootstrap: [CustomerreportComponent]
})
export class CustomerreportModule { }
