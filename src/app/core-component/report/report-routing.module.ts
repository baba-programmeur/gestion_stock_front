import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report.component';

const routes: Routes = [
  { path: '', redirectTo: 'purchaseorderreport', pathMatch: 'full' },
  {
    path: '',
    children: [ 
  {
    path: 'purchaseorderreport',
    loadChildren: () =>
      import('./purchaseorderreport/purchaseorderreport.module').then(
        (m) => m.PurchaseorderreportModule
      ),
  },
  {
    path: 'inventoryreport',
    loadChildren: () =>
      import('./inventoryreport/inventoryreport.module').then(
        (m) => m.InventoryreportModule
      ),
  },
  {
    path: 'salesreport',
    loadChildren: () =>
      import('./salesreport/salesreport.module').then(
        (m) => m.SalesreportModule
      ),
  },
  {
    path: 'invoicereport',
    loadChildren: () =>
      import('./invoicereport/invoicereport.module').then(
        (m) => m.InvoicereportModule
      ),
  },
  {
    path: 'purchasereport',
    loadChildren: () =>
      import('./purchasereport/purchasereport.module').then(
        (m) => m.PurchasereportModule
      ),
  },
  {
    path: 'supplierreport',
    loadChildren: () =>
      import('./supplierreport/supplierreport.module').then(
        (m) => m.SupplierreportModule
      ),
  },
  {
    path: 'customerreport',
    loadChildren: () =>
      import('./customerreport/customerreport.module').then(
        (m) => m.CustomerreportModule
      ),
  },
],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
