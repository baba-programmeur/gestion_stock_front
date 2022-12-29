import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people.component';

const routes: Routes = [
  { path: '', redirectTo: 'customerlist', pathMatch:'full' },
  {path:'',
  children:[
  {
    path: 'customerlist',
    loadChildren: () =>
      import('./customerlist/customerlist.module').then(
        (m) => m.CustomerlistModule
      ),
  },
  {
    path: 'addcustomer',
    loadChildren: () =>
      import('./addcustomer/addcustomer.module').then(
        (m) => m.AddcustomerModule
      ),
  },
  {
    path: 'supplierlist',
    loadChildren: () =>
      import('./supplierlist/supplierlist.module').then(
        (m) => m.SupplierlistModule
      ),
  },
  {
    path: 'addsupplier',
    loadChildren: () =>
      import('./addsupplier/addsupplier.module').then(
        (m) => m.AddsupplierModule
      ),
  },
  {
    path: 'userlist',
    loadChildren: () =>
      import('./userlist/userlist.module').then((m) => m.UserlistModule),
  },
  {
    path: 'adduser',
    loadChildren: () =>
      import('./adduser/adduser.module').then((m) => m.AdduserModule),
  },
  {
    path: 'storelist',
    loadChildren: () =>
      import('./storelist/storelist.module').then((m) => m.StorelistModule),
  },
  {
    path: 'addstore',
    loadChildren: () =>
      import('./addstore/addstore.module').then((m) => m.AddstoreModule),
  },
  {
    path: 'editcustomer',
    loadChildren: () =>
      import('./editcustomer/editcustomer.module').then(
        (m) => m.EditcustomerModule
      ),
  },
  {
    path: 'editsupplier',
    loadChildren: () =>
      import('./editsupplier/editsupplier.module').then(
        (m) => m.EditsupplierModule
      ),
  },
  {
    path: 'edituser',
    loadChildren: () =>
      import('./edituser/edituser.module').then((m) => m.EdituserModule),
  },
  {
    path: 'editstore',
    loadChildren: () =>
      import('./editstore/editstore.module').then((m) => m.EditstoreModule),
  },
],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
