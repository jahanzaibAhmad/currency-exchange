import { Component, Input, OnInit } from '@angular/core';
import { CurrencyModel } from '../shared/currency-exchange.model';

@Component({
  selector: 'app-currency-blocks',
  templateUrl: './currency-blocks.component.html',
  styleUrls: ['./currency-blocks.component.scss']
})
export class CurrencyBlocksComponent implements OnInit {

  @Input() currArray: CurrencyModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
