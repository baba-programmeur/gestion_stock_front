import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReturnComponent } from './return.component';



const routes: Routes = [
  { path: '', redirectTo: 'salesreturnlist', pathMatch:'full'},
  {
    path:'',
    children:[
  {
    path: 'salesreturnlist',
    loadChildren: () =>
      import('./salesreturnlist/salesreturnlist.module').then(
        (m) => m.SalesreturnlistModule
      ),
  },
  {
    path: 'createsalesreturn',
    loadChildren: () =>
      import('./createsalesreturn/createsalesreturn.module').then(
        (m) => m.CreatesalesreturnModule
      ),
  },
  {
    path: 'purchasereturnlist',
    loadChildren: () =>
      import('./purchasereturnlist/purchasereturnlist.module').then(
        (m) => m.PurchasereturnlistModule
      ),
  },
  {
    path: 'createpurchasereturn',
    loadChildren: () =>
      import('./createpurchasereturn/createpurchasereturn.module').then(
        (m) => m.CreatepurchasereturnModule
      ),
  },
  {
    path: 'editsalesreturn',
    loadChildren: () =>
      import('./editsalesreturn/editsalesreturn.module').then(
        (m) => m.EditsalesreturnModule
      ),
  },
  {
    path: 'editpurchasereturn',
    loadChildren: () =>
      import('./editpurchasereturn/editpurchasereturn.module').then(
        (m) => m.EditpurchasereturnModule
      ),
  },
],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnRoutingModule {}
