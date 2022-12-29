import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { EditsalesreturnRoutingModule } from './editsalesreturn-routing.module';
import { EditsalesreturnComponent } from './editsalesreturn.component';


@NgModule({
  declarations: [
    EditsalesreturnComponent
  ],
  imports: [
    CommonModule,
    EditsalesreturnRoutingModule,
    DatepickerModule
  ],
  bootstrap: [EditsalesreturnComponent]
})
export class EditsalesreturnModule { }
