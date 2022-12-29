import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductlistRoutingModule } from './productlist-routing.module';
import { ProductlistComponent } from './productlist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from "@angular/material/dialog";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    ProductlistComponent
  ],
    imports: [
        CommonModule,
        ProductlistRoutingModule,
        DataTablesModule,
        FormsModule,
        MatDialogModule,
        SweetAlert2Module.forRoot(),
        MatPaginatorModule,
       MatPaginatorModule,
    ]
})
export class ProductlistModule { }
