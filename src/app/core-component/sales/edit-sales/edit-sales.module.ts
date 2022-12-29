import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { EditSalesRoutingModule } from './edit-sales-routing.module';
import { EditSalesComponent } from './edit-sales.component';


@NgModule({
  declarations: [
    EditSalesComponent
  ],
  imports: [
    CommonModule,
    EditSalesRoutingModule,
    DatepickerModule
  ],
 bootstrap: [EditSalesComponent]
})
export class EditSalesModule { }
