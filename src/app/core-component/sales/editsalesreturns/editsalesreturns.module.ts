import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { EditsalesreturnsRoutingModule } from './editsalesreturns-routing.module';
import { EditsalesreturnsComponent } from './editsalesreturns.component';


@NgModule({
  declarations: [
    EditsalesreturnsComponent
  ],
  imports: [
    CommonModule,
    EditsalesreturnsRoutingModule,
    DatepickerModule
  ],
  bootstrap: [EditsalesreturnsComponent]
})
export class EditsalesreturnsModule { }
