import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierlistRoutingModule } from './supplierlist-routing.module';
import { SupplierlistComponent } from './supplierlist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SupplierlistComponent
  ],
  imports: [
    CommonModule,
    SupplierlistRoutingModule,
    DataTablesModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ]
})
export class SupplierlistModule { }
