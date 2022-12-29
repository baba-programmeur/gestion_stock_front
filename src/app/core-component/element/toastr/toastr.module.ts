import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrRoutingModule } from './toastr-routing.module';
import { ToastrComponent } from './toastr.component';


@NgModule({
  declarations: [
    ToastrComponent
  ],
  imports: [
    CommonModule,
    ToastrRoutingModule
  ]
})
export class ToastrModule { }
