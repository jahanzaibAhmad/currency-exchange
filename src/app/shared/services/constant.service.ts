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

  detach(data: any) {
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


  getLastDateOfEachMonth(): string[] {
    let array: string[] = [];
    for (let i = 0; i < 12; i++) {
      const m = i ;
      var date = new Date(), y = date.getFullYear();//, m = date.getMonth();
      const currentMonth = date.getMonth() + 1;
      if (m <= currentMonth) {
        var lastDay = new Date(y, m + 1, 0);
        if (lastDay > new Date()) {
          lastDay = new Date();
          const formattedDate = this.formatDate(lastDay);
          array = [...array, formattedDate];
          break;
        }
        const formattedDate = this.formatDate(lastDay);
        array = [...array, formattedDate];
      }
    }
    return array;
  }


  formatDate(date: Date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }


}



