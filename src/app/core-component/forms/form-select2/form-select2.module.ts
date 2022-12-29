import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormSelect2RoutingModule } from './form-select2-routing.module';
import { FormSelect2Component } from './form-select2.component';


@NgModule({
  declarations: [
    FormSelect2Component
  ],
  imports: [
    CommonModule,
    FormSelect2RoutingModule
  ]
})
export class FormSelect2Module { }
