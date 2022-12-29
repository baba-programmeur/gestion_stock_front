import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicereportRoutingModule } from './invoicereport-routing.module';
import { InvoicereportComponent } from './invoicereport.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    InvoicereportComponent
  ],
  imports: [
    CommonModule,
    InvoicereportRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule
  ],
 bootstrap: [InvoicereportComponent]
})
export class InvoicereportModule { }
