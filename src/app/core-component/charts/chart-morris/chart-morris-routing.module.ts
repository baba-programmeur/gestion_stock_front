import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartMorrisComponent } from './chart-morris.component';

const routes: Routes = [{ path: '', component: ChartMorrisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartMorrisRoutingModule { }
