import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyExchangeRoutingModule } from './currency-exchange-routing.module';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';
import { CurrencyHomeComponent } from './currency-home/currency-home.component';


@NgModule({
  declarations: [
    CurrencyDetailComponent,
    CurrencyHomeComponent
  ],
  imports: [
    CommonModule,
    CurrencyExchangeRoutingModule
  ]
})
export class CurrencyExchangeModule { }
