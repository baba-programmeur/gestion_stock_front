import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { AddtransferRoutingModule } from './addtransfer-routing.module';
import { AddtransferComponent } from './addtransfer.component';


@NgModule({
  declarations: [
    AddtransferComponent
  ],
  imports: [
    CommonModule,
    AddtransferRoutingModule,
    DatepickerModule
  ],
  bootstrap: []
})
export class AddtransferModule { }
