import { Component, OnInit } from '@angular/core';

import { CurrencyListService } from '../shared/currency-list.service';
import { Currencies } from '../shared/currencies';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  currencies: Currencies;
  jsonKeys: Array<string>;

  constructor(private currencyListService: CurrencyListService) { }

  ngOnInit() {
    this.getCurrencies();
  }

  getCurrencies(): void {
    this.currencyListService.getCurrencyList().subscribe(
      currencies => {
        this.currencies = currencies;
        this.prepareCurrencyList();
      },
      error => console.log('Error: Could not fetch currency list.')
    );
  }

  prepareCurrencyList(): void {
    this.jsonKeys = Object.keys(this.currencies.rates);
  }

}
