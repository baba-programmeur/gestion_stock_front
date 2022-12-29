import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatepurchasereturnRoutingModule } from './createpurchasereturn-routing.module';
import { CreatepurchasereturnComponent } from './createpurchasereturn.component';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    CreatepurchasereturnComponent
  ],
  imports: [
    CommonModule,
    CreatepurchasereturnRoutingModule,
    DatepickerModule
  ],
  bootstrap: [CreatepurchasereturnComponent]
})
export class CreatepurchasereturnModule { }
