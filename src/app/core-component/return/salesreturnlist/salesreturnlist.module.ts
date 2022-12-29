import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesreturnlistRoutingModule } from './salesreturnlist-routing.module';
import { SalesreturnlistComponent } from './salesreturnlist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    SalesreturnlistComponent
  ],
  imports: [
    CommonModule,
    SalesreturnlistRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot()
  ],
  bootstrap: [SalesreturnlistComponent]
})
export class SalesreturnlistModule { }
