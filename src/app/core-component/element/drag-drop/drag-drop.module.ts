import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropRoutingModule } from './drag-drop-routing.module';
import { DragDropComponent } from './drag-drop.component';


@NgModule({
  declarations: [
    DragDropComponent
  ],
  imports: [
    CommonModule,
    DragDropRoutingModule
  ]
})
export class DragDropModule { }
