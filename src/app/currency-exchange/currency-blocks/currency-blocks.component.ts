import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-blocks',
  templateUrl: './currency-blocks.component.html',
  styleUrls: ['./currency-blocks.component.scss']
})
export class CurrencyBlocksComponent implements OnInit {

  @Input() currArray: any;
  constructor() { }

  ngOnInit(): void {
  }

}
