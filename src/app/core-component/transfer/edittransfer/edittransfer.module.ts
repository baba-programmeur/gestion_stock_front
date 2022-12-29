import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule } from 'ng2-datepicker';
import { EdittransferRoutingModule } from './edittransfer-routing.module';
import { EdittransferComponent } from './edittransfer.component';


@NgModule({
  declarations: [
    EdittransferComponent
  ],
  imports: [
    CommonModule,
    EdittransferRoutingModule,
    DatepickerModule
  ],
})
export class EdittransferModule { }
