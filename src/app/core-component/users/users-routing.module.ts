import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', redirectTo: 'newuser', pathMatch: 'full' },
  {
    path: '',
    children: [ 
  {
    path: 'newuser',
    loadChildren: () =>
      import('./newuser/newuser.module').then((m) => m.NewuserModule),
  },
  {
    path: 'userlists',
    loadChildren: () =>
      import('./userlists/userlists.module').then((m) => m.UserlistsModule),
  },
  {
    path: 'newuseredit',
    loadChildren: () =>
      import('./newuseredit/newuseredit.module').then(
        (m) => m.NewusereditModule
      ),
  },
],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
