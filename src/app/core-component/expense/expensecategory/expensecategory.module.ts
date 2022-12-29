import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { ExpensecategoryRoutingModule } from './expensecategory-routing.module';
import { ExpensecategoryComponent } from './expensecategory.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExpensecategoryComponent
  ],
  imports: [
    CommonModule,
    ExpensecategoryRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot()
  ],
  bootstrap: [ExpensecategoryComponent]
})
export class ExpensecategoryModule { }
