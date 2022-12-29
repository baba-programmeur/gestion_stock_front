import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClipboardRoutingModule } from './clipboard-routing.module';
import { ClipboardComponent } from './clipboard.component';


@NgModule({
  declarations: [
    ClipboardComponent
  ],
  imports: [
    CommonModule,
    ClipboardRoutingModule
  ]
})
export class ClipboardModule { }
