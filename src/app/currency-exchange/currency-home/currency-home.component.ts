import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantService } from 'src/app/shared/constant.service';
import { CurrencyModel, CurrencySymbolModel } from '../shared/currency-exchange.model';
import { CurrencyExchangeService } from '../shared/currency-exchange.service';

@Component({
  selector: 'app-currency-home',
  templateUrl: './currency-home.component.html',
  styleUrls: ['./currency-home.component.scss']
})
export class CurrencyHomeComponent implements OnInit {
  currencyForm!: FormGroup;
  symbols: CurrencySymbolModel[] = [];
  currArray: CurrencyModel[] = [];
  isDetail: boolean = false;
  heading: string = 'Currency Exchanger';
  lastRates: any; // As it has come with dynamic currencies i.e {AUD : 1.551932, USD : 1.051325}
  
  isDetailBtn: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private currencyExchangeService: CurrencyExchangeService,
    public constantService: ConstantService,
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params: any) => {
    //   this.isDetail = false;
    //   if (params.isDetail == '1') {
    //     this.isDetail = true;
    //   } 
    //   this.checkDetail();
    //   console.log(params);
    // });
    this.bindForm();
    // this.getFixerDetail();
    this.getSymbols();
    const currArr = this.constantService.topCurrenciesArray;
    this.currArray = this.constantService.detach(currArr);
  }

  /** Binding form */
  private bindForm() {
    this.currencyForm = this.formBuilder.group({
      amount: [null, Validators.compose([
        Validators.required,
      ])],
      fromCurrency: ['EUR'],
      toCurrency: ['USD'],
      convertionAmt: [''],
      convertionAmtOnly: [''],
    });

    this.enableDisableField();
  }



  get f(): { [key: string]: AbstractControl } {
    return this.currencyForm.controls;
  }

  private getFixerDetail() {
    this.currencyExchangeService.getFixerDetail().subscribe(
      data => {
        console.log(data);
      });
  }

  private getSymbols() {
    this.currencyExchangeService.getSymbols().subscribe(
      data => {

        for (const property in data.symbols) {
          let obj;
          obj = { key: '', value: '' };
          obj.key = property;
          obj.value = data.symbols[property];
          this.symbols = [...this.symbols, obj];
        }
      });
  }

  convert() {
    const amount = +this.f['amount'].value;
    const toCurr = this.f['toCurrency'].value;
    const fromCurr = this.f['fromCurrency'].value;
    let topCurr = this.constantService.topCurrencies;
    topCurr = topCurr + ',' + toCurr;
    this.currencyExchangeService.getConverstion(topCurr, fromCurr).subscribe(
      data => {
        if (data.rates) {
          this.lastRates = data.rates;
          this.setRates();
        }
        this.setTextBoxValue(toCurr, fromCurr, amount, data.rates[toCurr]);
        this.isDetailBtn = true;
      });
  }

  setRates(val?: number) {
      const amount = +this.f['amount'].value;
      this.currArray?.forEach(element => {
        if (val == 0) {
          element.rate = 0;
        } else {
          if( this.lastRates){
            element.rate = amount * this.lastRates?.[element.key];
          }
        }
      });
      if(val != 0 && this.lastRates){
        const amount = +this.f['amount'].value;
        const toCurr = this.f['toCurrency'].value;
        const fromCurr = this.f['fromCurrency'].value;
        this.setTextBoxValue(toCurr, fromCurr, amount, this.lastRates?.[toCurr]);
      // this.f['convertionAmtOnly'].setValue((+this.lastRates[this.f['toCurrency'].value] * +amount) + toCurr);
      }
    }

  enableDisableField() {
    Object.keys(this.currencyForm.controls).forEach(key => {
      if (key == 'amount') return;
      if (this.currencyForm.invalid) {
        this.f[key].disable();
      } else {
        this.f[key].enable();
      }
      if(this.isDetail){
        this.f['fromCurrency'].disable();
      }
      this.setRates();
    });
  }

  selectChange(){
    this.lastRates = null;
    this.setRates(0);
    this.f['convertionAmt'].setValue(null);
    this.f['convertionAmtOnly'].setValue((null));
    if(this.isDetail){
      this.convert();
    } else {
      this.isDetailBtn = false;
    }
  }


  setTextBoxValue(toCurr: string, fromCurr: string, amount: number, rate: string) {
    const value = 1 + ' ' + fromCurr + ' = ' + rate + ' ' + toCurr;
    this.f['convertionAmt'].setValue(value);
    const toVal = (+rate * +amount) + ' ' + toCurr;
    this.f['convertionAmtOnly'].setValue(toVal);
  }

  toggleToFrom() {
    const fromCurr = this.constantService.detach(this.f['fromCurrency'].value);
    this.f['fromCurrency'].setValue(this.f['toCurrency'].value);
    this.f['toCurrency'].setValue(fromCurr);
    this.convert();
  }

  detail() {
    this.isDetail = true;
    this.f['fromCurrency'].disable();
    const symbol = this.symbols.find((x: CurrencySymbolModel) => x.key == this.f['fromCurrency'].value);
    this.heading = '<strong>' + symbol?.key + '</strong>' + ' - ' + symbol?.value;

  }

  back() {
    this.isDetail = false;
    this.heading = 'Currency Exchanger';
    this.f['fromCurrency'].enable();
  }

}
