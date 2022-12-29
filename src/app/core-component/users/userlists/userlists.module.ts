import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlistsRoutingModule } from './userlists-routing.module';
import { UserlistsComponent } from './userlists.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { DatepickerModule } from 'ng2-datepicker';
@NgModule({
  declarations: [
    UserlistsComponent
  ],
  imports: [
    CommonModule,
    UserlistsRoutingModule,
    DataTablesModule,
    FormsModule,
    DatepickerModule
  ],
 bootstrap: [UserlistsComponent]
})
export class UserlistsModule { }
