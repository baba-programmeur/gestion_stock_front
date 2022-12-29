import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';

import { PurchaselistRoutingModule } from './purchaselist-routing.module';
import { PurchaselistComponent } from './purchaselist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PurchaselistComponent
  ],
  imports: [
    CommonModule,
    PurchaselistRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot()
  ],
  bootstrap: [PurchaselistComponent]
})
export class PurchaselistModule { }
