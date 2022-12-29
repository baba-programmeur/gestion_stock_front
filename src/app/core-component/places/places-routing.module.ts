import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesComponent } from './places.component';

const routes: Routes = [
  { path: '', redirectTo: 'newcountry', pathMatch: 'full' },
  {
    path: '',
    children: [
  {
    path: 'newcountry',
    loadChildren: () =>
      import('./newcountry/newcountry.module').then((m) => m.NewcountryModule),
  },
  {
    path: 'countrieslist',
    loadChildren: () =>
      import('./countrieslist/countrieslist.module').then(
        (m) => m.CountrieslistModule
      ),
  },
  {
    path: 'newstate',
    loadChildren: () =>
      import('./newstate/newstate.module').then((m) => m.NewstateModule),
  },
  {
    path: 'statelist',
    loadChildren: () =>
      import('./statelist/statelist.module').then((m) => m.StatelistModule),
  },
  {
    path: 'editcountry',
    loadChildren: () =>
      import('./editcountry/editcountry.module').then(
        (m) => m.EditcountryModule
      ),
  },
  {
    path: 'editstate',
    loadChildren: () =>
      import('./editstate/editstate.module').then((m) => m.EditstateModule),
  },
],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesRoutingModule {}
