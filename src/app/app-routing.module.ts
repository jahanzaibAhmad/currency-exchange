import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app/ce',
    pathMatch: 'full'
  },
  {
    path: 'app',
    loadChildren: () => import('./nav-menu/nav-menu.module').then(m => m.NavMenuModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
