import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct.component';
import {ProductlistComponent} from "../productlist/productlist.component";

const routes: Routes =
  [{ path: '', component: AddproductComponent },
    {path :'listProduct',component:AddproductComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddproductRoutingModule { }
