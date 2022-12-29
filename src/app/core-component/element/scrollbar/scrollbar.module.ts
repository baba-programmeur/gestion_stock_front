import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollbarRoutingModule } from './scrollbar-routing.module';
import { ScrollbarComponent } from './scrollbar.component';


@NgModule({
  declarations: [
    ScrollbarComponent
  ],
  imports: [
    CommonModule,
    ScrollbarRoutingModule
  ]
})
export class ScrollbarModule { }
