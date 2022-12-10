import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';
import { CurrencyHomeComponent } from './currency-home/currency-home.component';

const routes: Routes = [
  {
    path: '',
    component: CurrencyHomeComponent
  },
  {
    path: 'detail',
    component: CurrencyDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyExchangeRoutingModule { }
