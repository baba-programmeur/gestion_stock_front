import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorelistRoutingModule } from './storelist-routing.module';
import { StorelistComponent } from './storelist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StorelistComponent
  ],
  imports: [
    CommonModule,
    StorelistRoutingModule,
    DataTablesModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ]
})
export class StorelistModule { }
