import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountrieslistRoutingModule } from './countrieslist-routing.module';
import { CountrieslistComponent } from './countrieslist.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CountrieslistComponent
  ],
  imports: [
    CommonModule,
    CountrieslistRoutingModule,
    DataTablesModule,
    FormsModule
  ]
})
export class CountrieslistModule { }
