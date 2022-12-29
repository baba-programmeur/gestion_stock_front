import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { CreatesalesreturnsRoutingModule } from './createsalesreturns-routing.module';
import { CreatesalesreturnsComponent } from './createsalesreturns.component';


@NgModule({
  declarations: [
    CreatesalesreturnsComponent
  ],
  imports: [
    CommonModule,
    CreatesalesreturnsRoutingModule,
    DatepickerModule
  ],
  bootstrap: [CreatesalesreturnsComponent]
})
export class CreatesalesreturnsModule { }
