import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { SalesreturnlistsRoutingModule } from './salesreturnlists-routing.module';
import { SalesreturnlistsComponent } from './salesreturnlists.component';
import { DataTablesModule } from 'angular-datatables';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SalesreturnlistsComponent
  ],
  imports: [
    CommonModule,
    SalesreturnlistsRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule,
    SweetAlert2Module.forRoot()
  ],
  bootstrap: [SalesreturnlistsComponent]
})
export class SalesreturnlistsModule { }
