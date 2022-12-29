import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';

import { AddquotationRoutingModule } from './addquotation-routing.module';
import { AddquotationComponent } from './addquotation.component';


@NgModule({
  declarations: [
    AddquotationComponent
  ],
  imports: [
    CommonModule,
    AddquotationRoutingModule,
    DatepickerModule
  ],
  bootstrap: [AddquotationComponent]
})
export class AddquotationModule { }
