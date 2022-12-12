import { Component, OnInit, ViewChild } from '@angular/core';
import { CurrencyHomeComponent } from 'src/app/currency-exchange/currency-home/currency-home.component';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild(CurrencyHomeComponent) currencyHomeComponent!: CurrencyHomeComponent;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  btnDetail(from: string, to: string){
    let data = { fromCurrency: from, toCurrency: to };
    this.sharedService.btnDetailEmitter.emit(data);
  }
}
