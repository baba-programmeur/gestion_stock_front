import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreComponentRoutingModule } from './core-component-routing.module';
import { CoreComponentComponent } from './core-component.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoreComponentComponent
  ],
  imports: [
    CommonModule,
    CoreComponentRoutingModule,
    FormsModule
  ]
})
export class CoreComponentModule { }
