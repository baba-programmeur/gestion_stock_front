import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormWizardRoutingModule } from './form-wizard-routing.module';
import { FormWizardComponent } from './form-wizard.component';


@NgModule({
  declarations: [
    FormWizardComponent
  ],
  imports: [
    CommonModule,
    FormWizardRoutingModule
  ]
})
export class FormWizardModule { }
