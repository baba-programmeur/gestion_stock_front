import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryreportRoutingModule } from './inventoryreport-routing.module';
import { InventoryreportComponent } from './inventoryreport.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    InventoryreportComponent
  ],
  imports: [
    CommonModule,
    InventoryreportRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule
  ],
 bootstrap: [InventoryreportComponent]
})
export class InventoryreportModule { }
