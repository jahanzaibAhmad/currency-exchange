import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';

const children: any = [
  {
    path: 'ce',
    loadChildren: () => import('../currency-exchange/currency-exchange.module').then(m => m.CurrencyExchangeModule)
  },
];

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: children,
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavMenuRoutingModule { }
