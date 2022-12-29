import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from './expense.component';

const routes: Routes = [
  { path: '', redirectTo: 'expenselist', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'expenselist',
        loadChildren: () =>
          import('./expenselist/expenselist.module').then(
            (m) => m.ExpenselistModule
          ),
      },
    ],
  },
  {
    path: 'expensecategory',
    loadChildren: () =>
      import('./expensecategory/expensecategory.module').then(
        (m) => m.ExpensecategoryModule
      ),
  },
  {
    path: 'createexpense',
    loadChildren: () =>
      import('./createexpense/createexpense.module').then(
        (m) => m.CreateexpenseModule
      ),
  },
  {
    path: 'editexpense',
    loadChildren: () =>
      import('./editexpense/editexpense.module').then(
        (m) => m.EditexpenseModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseRoutingModule {}
