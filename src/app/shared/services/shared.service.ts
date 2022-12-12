import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  btnDetailEmitter = new EventEmitter<{ fromCurrency: string, toCurrency: string }>();

  constructor() { }
}
