import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatepermissionRoutingModule } from './createpermission-routing.module';
import { CreatepermissionComponent } from './createpermission.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreatepermissionComponent
  ],
  imports: [
    CommonModule,
    CreatepermissionRoutingModule,
    FormsModule
  ]
})
export class CreatepermissionModule { }
