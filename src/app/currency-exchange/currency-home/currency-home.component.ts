import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyExchangeService } from '../shared/currency-exchange.service';

@Component({
  selector: 'app-currency-home',
  templateUrl: './currency-home.component.html',
  styleUrls: ['./currency-home.component.scss']
})
export class CurrencyHomeComponent implements OnInit {
  currencyForm!: FormGroup;
  // currencyForm = this.formBuilder.group({
  //   amount: [0, Validators.compose([
  //     Validators.required,
  //   ])],
  //   from: [1],
  //   to: [0],
  // });

  // departmentForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private currencyExchangeService : CurrencyExchangeService
  ) { }

  ngOnInit(): void {
    this.bindForm();
    this.getTestDetail();
  }

  /** Binding form */
  private bindForm() {
    this.currencyForm = this.formBuilder.group({
      amount: [10, Validators.compose([
        Validators.required,
      ])],
      fromCurrency: [11],
      toCurrency: [21],
      convertionAmt: [''],
    });
  }


  get f(): { [key: string]: AbstractControl } {
    return this.currencyForm.controls;
  }

  private getTestDetail() {
    this.currencyExchangeService.getFixerDetail().subscribe(
      data => {
        console.log(data);
      });
  }


}
