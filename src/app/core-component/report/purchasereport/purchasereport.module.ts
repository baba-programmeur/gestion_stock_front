import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasereportRoutingModule } from './purchasereport-routing.module';
import { PurchasereportComponent } from './purchasereport.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    PurchasereportComponent
  ],
  imports: [
    CommonModule,
    PurchasereportRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule
  ],
 bootstrap: [PurchasereportComponent]
})
export class PurchasereportModule { }
