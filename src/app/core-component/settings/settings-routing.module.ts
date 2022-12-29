import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'generalsettings', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'generalsettings',
        loadChildren: () =>
          import('./generalsettings/generalsettings.module').then(
            (m) => m.GeneralsettingsModule
          ),
      },
      {
        path: 'emailsettings',
        loadChildren: () =>
          import('./emailsettings/emailsettings.module').then(
            (m) => m.EmailsettingsModule
          ),
      },
      {
        path: 'paymentsettings',
        loadChildren: () =>
          import('./paymentsettings/paymentsettings.module').then(
            (m) => m.PaymentsettingsModule
          ),
      },
      {
        path: 'currencysettings',
        loadChildren: () =>
          import('./currencysettings/currencysettings.module').then(
            (m) => m.CurrencysettingsModule
          ),
      },
      {
        path: 'grouppermissions',
        loadChildren: () =>
          import('./grouppermissions/grouppermissions.module').then(
            (m) => m.GrouppermissionsModule
          ),
      },
      {
        path: 'taxrates',
        loadChildren: () =>
          import('./taxrates/taxrates.module').then((m) => m.TaxratesModule),
      },
    ],
  },
  {
    path: 'createpermission',
    loadChildren: () =>
      import('./createpermission/createpermission.module').then(
        (m) => m.CreatepermissionModule
      ),
  },
  {
    path: 'editpermission',
    loadChildren: () =>
      import('./editpermission/editpermission.module').then(
        (m) => m.EditpermissionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
