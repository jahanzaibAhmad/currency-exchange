import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyExchangeRoutingModule } from './currency-exchange-routing.module';
import { CurrencyHomeComponent } from './currency-home/currency-home.component';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyBlocksComponent } from './currency-blocks/currency-blocks.component';

@NgModule({
  declarations: [
    CurrencyHomeComponent,
    CurrencyDetailComponent,
    CurrencyBlocksComponent
  ],
  imports: [
    CommonModule,
    CurrencyExchangeRoutingModule,
    ReactiveFormsModule,
    NgbDropdownModule
    // HttpClientModule

  ]
})
export class CurrencyExchangeModule { }
