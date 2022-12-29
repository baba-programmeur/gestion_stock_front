import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotationComponent } from './quotation.component';

const routes: Routes = [
  { path: '', redirectTo: 'quotationList', pathMatch: 'full' },
  {
    path: '',
    children: [
  {
    path: 'quotationList',
    loadChildren: () =>
      import('./quotation-list/quotation-list.module').then(
        (m) => m.QuotationListModule
      ),
  },
  {
    path: 'addquotation',
    loadChildren: () =>
      import('./addquotation/addquotation.module').then(
        (m) => m.AddquotationModule
      ),
  },
  {
    path: 'editquotation',
    loadChildren: () =>
      import('./editquotation/editquotation.module').then(
        (m) => m.EditquotationModule
      ),
  },
],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotationRoutingModule {}
