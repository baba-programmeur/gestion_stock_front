import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerlistRoutingModule } from './customerlist-routing.module';
import { CustomerlistComponent } from './customerlist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerlistComponent
  ],
  imports: [
    CommonModule,
    CustomerlistRoutingModule,
    DataTablesModule,
    SweetAlert2Module.forRoot(),
    FormsModule
  ]
})
export class CustomerlistModule { }
