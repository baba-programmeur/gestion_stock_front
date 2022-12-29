import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditproductComponent} from "./core-component/product/editproduct/editproduct.component";

const routes: Routes = [
  { path:'updateProduit/:id', component:EditproductComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },

  {
    path: '',
    loadChildren: () =>
      import('./core-component/core-component.module').then(
        (m) => m.CoreComponentModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
