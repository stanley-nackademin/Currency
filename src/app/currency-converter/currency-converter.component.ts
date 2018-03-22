import { Component, OnInit } from '@angular/core';

import { CurrencyConverterService } from '../shared/currency-converter.service';
import { SendConversion } from '../shared/send-conversion';
import { CurrencyList } from '../shared/currency-list';
import { ReceiveConversion } from '../shared/receive-conversion';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  conversion: SendConversion = {
    from: '',
    to: '',
    amount: 1
  };
  currencyList: CurrencyList;
  currencyKeys: Array<string>;
  convertedCurrency: ReceiveConversion;
  result: number;

  constructor(private currencyConverterService: CurrencyConverterService) { }

  ngOnInit() {
    this.getCurrencies();
  }

  getCurrencies(): void {
    this.currencyConverterService.getCurrencyList().subscribe(
      currencyList => {
        this.currencyList = currencyList;
        this.prepareCurrencyList();
      },
      error => console.log('Error: Could not fetch currency list.')
    );
  }

  prepareCurrencyList(): void {
    this.currencyKeys = Object.keys(this.currencyList.symbols);
  }

  convertCurrency(): void {
    this.checkAmount();
    this.currencyConverterService.queryConversion(this.conversion).subscribe(
      currency => {
        this.convertedCurrency = currency;
        this.prepareResult();

        // Conversion API not available to free users
        console.log(currency);
      },
      error => console.log('Error: Could not fetch converted currency.')
    );
  }

  prepareResult(): void {
    this.result = this.convertedCurrency.result;
  }

  checkAmount(): void {
    if (isNaN(this.conversion.amount)) {
      // If amount is not a number, default to 1
      this.conversion.amount = 1;
    }
  }

}
