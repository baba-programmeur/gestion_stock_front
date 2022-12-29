import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist.component';
import {EditproductComponent} from "../editproduct/editproduct.component";

const routes: Routes = [

 // { path:'updateProduit/:id', component:EditproductComponent},
  { path: '', component: ProductlistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductlistRoutingModule { }
