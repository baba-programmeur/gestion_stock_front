import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditpermissionRoutingModule } from './editpermission-routing.module';
import { EditpermissionComponent } from './editpermission.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditpermissionComponent
  ],
  imports: [
    CommonModule,
    EditpermissionRoutingModule,
    FormsModule
  ]
})
export class EditpermissionModule { }
