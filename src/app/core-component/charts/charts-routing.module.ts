import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsComponent } from './charts.component';
imports: [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  NgApexchartsModule,
]

const routes: Routes = [
  { path: '', redirectTo: 'chart-apex', pathMatch: 'full' },
  {
    path: '',
    children: [
  {
    path: 'chart-apex',
    loadChildren: () =>
      import('./chart-apex/chart-apex.module').then((m) => m.ChartApexModule),
  },
  {
    path: 'chart-js',
    loadChildren: () =>
      import('./chart-js/chart-js.module').then((m) => m.ChartJsModule),
  },
  {
    path: 'chart-morris',
    loadChildren: () =>
      import('./chart-morris/chart-morris.module').then(
        (m) => m.ChartMorrisModule
      ),
  },
  {
    path: 'chart-flot',
    loadChildren: () =>
      import('./chart-flot/chart-flot.module').then((m) => m.ChartFlotModule),
  },
  {
    path: 'chart-peity',
    loadChildren: () =>
      import('./chart-peity/chart-peity.module').then(
        (m) => m.ChartPeityModule
      ),
  },
],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
