import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrouppermissionsRoutingModule } from './grouppermissions-routing.module';
import { GrouppermissionsComponent } from './grouppermissions.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GrouppermissionsComponent
  ],
  imports: [
    CommonModule,
    GrouppermissionsRoutingModule,
    DataTablesModule,
    FormsModule
  ]
})
export class GrouppermissionsModule { }
