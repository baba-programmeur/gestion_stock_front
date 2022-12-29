import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { AddSalesRoutingModule } from './add-sales-routing.module';
import { AddSalesComponent } from './add-sales.component';


@NgModule({
  declarations: [
    AddSalesComponent
  ],
  imports: [
    CommonModule,
    AddSalesRoutingModule,
    DatepickerModule
  ],

 bootstrap: [AddSalesComponent]
  
})
export class AddSalesModule { }
