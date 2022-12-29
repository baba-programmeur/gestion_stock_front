import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasereturnlistRoutingModule } from './purchasereturnlist-routing.module';
import { PurchasereturnlistComponent } from './purchasereturnlist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    PurchasereturnlistComponent
  ],
  imports: [
    CommonModule,
    PurchasereturnlistRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot()
  ],
  bootstrap: [PurchasereturnlistComponent]
})
export class PurchasereturnlistModule { }
