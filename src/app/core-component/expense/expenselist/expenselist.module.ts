import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { ExpenselistRoutingModule } from './expenselist-routing.module';
import { ExpenselistComponent } from './expenselist.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExpenselistComponent
  ],
  imports: [
    CommonModule,
    ExpenselistRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot()

  ],
  bootstrap: [ExpenselistComponent]
})
export class ExpenselistModule { }
