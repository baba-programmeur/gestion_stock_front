import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightboxRoutingModule } from './lightbox-routing.module';
import { LightboxComponent } from './lightbox.component';


@NgModule({
  declarations: [
    LightboxComponent
  ],
  imports: [
    CommonModule,
    LightboxRoutingModule
  ]
})
export class LightboxModule { }
