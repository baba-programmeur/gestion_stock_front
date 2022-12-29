import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsettingsRoutingModule } from './paymentsettings-routing.module';
import { PaymentsettingsComponent } from './paymentsettings.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaymentsettingsComponent
  ],
  imports: [
    CommonModule,
    PaymentsettingsRoutingModule,
    DataTablesModule,
    FormsModule
  ]
})
export class PaymentsettingsModule { }
