import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductRoutingModule } from './addproduct-routing.module';
import { AddproductComponent } from './addproduct.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AddproductComponent
  ],
    imports: [
        CommonModule,
        AddproductRoutingModule,
        FormsModule,
       HttpClientModule
    ]
})
export class AddproductModule { }
