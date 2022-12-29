import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandlistRoutingModule } from './brandlist-routing.module';
import { BrandlistComponent } from './brandlist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BrandlistComponent
  ],
  imports: [
    CommonModule,
    BrandlistRoutingModule,
    DataTablesModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ]
})
export class BrandlistModule { }
