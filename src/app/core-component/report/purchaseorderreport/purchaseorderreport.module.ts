import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseorderreportRoutingModule } from './purchaseorderreport-routing.module';
import { PurchaseorderreportComponent } from './purchaseorderreport.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    PurchaseorderreportComponent
  ],
  imports: [
    CommonModule,
    PurchaseorderreportRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule
  ],
 bootstrap: [PurchaseorderreportComponent]
})
export class PurchaseorderreportModule { }
