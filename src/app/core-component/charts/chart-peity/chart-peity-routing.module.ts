import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartPeityComponent } from './chart-peity.component';

const routes: Routes = [{ path: '', component: ChartPeityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartPeityRoutingModule { }
