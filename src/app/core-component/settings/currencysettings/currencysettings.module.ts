import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencysettingsRoutingModule } from './currencysettings-routing.module';
import { CurrencysettingsComponent } from './currencysettings.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CurrencysettingsComponent
  ],
  imports: [
    CommonModule,
    CurrencysettingsRoutingModule,
    DataTablesModule,
    FormsModule
  ]
})
export class CurrencysettingsModule { }
