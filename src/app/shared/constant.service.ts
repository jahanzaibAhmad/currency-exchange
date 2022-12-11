import { Injectable } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {


  topCurrencies: string = 'USD,EUR,JPY,GBP,AUD,CAD,CHF,CNY,OMR';
  topCurrenciesArray: any[] = [{ key: 'USD', value: 'US dollar', rate: null }, { key: 'EUR', value: 'Euro', rate: null }, { key: 'JPY', value: 'Japanese yen', rate: null }, { key: 'GBP', value: 'Pound sterling', rate: null },
  { key: 'AUD', value: 'Australian dollar', rate: null }, { key: 'CAD', value: 'Canadian dollar', rate: null }, { key: 'CHF', value: 'Swiss franc', rate: null }, { key: 'CNY', value: 'Chinese yuan', rate: null },
  { key: 'OMR', value: 'Omani Rial', rate: null }];

  constructor() { }

  detach(data: any){
    return JSON.parse(JSON.stringify(data));
  }

  onlyCharKey(evt: any) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return true;
    return false;
  }

  numberOnly(event: any): boolean {
    /* restrict character keys, allow only numbers */
    return this.onlyCharKey(event) ? false : true;
  }


}



