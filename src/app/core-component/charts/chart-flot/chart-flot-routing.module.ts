import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartFlotComponent } from './chart-flot.component';

const routes: Routes = [{ path: '', component: ChartFlotComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartFlotRoutingModule { }
