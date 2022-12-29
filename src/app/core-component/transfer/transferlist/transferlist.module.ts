import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferlistRoutingModule } from './transferlist-routing.module';
import { TransferlistComponent } from './transferlist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    TransferlistComponent
  ],
  imports: [
    CommonModule,
    TransferlistRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot()
  ],
 bootstrap: [TransferlistComponent]

})
export class TransferlistModule { }
