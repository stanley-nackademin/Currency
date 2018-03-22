import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Currencies } from './currencies';

@Injectable()
export class CurrencyListService {

  private BASE_URI = 'http://data.fixer.io/api/';
  private API_KEY = '4168daaa3eb1e1f0408c94c9e01f3fa5';
  private SYMBOLS = 'USD,AUD,CAD,GBP,SEK,JPY,CNY';

  constructor(private http: HttpClient) { }

  getCurrencyList(): Observable<Currencies> {
    return this.http.get<Currencies>(
      this.BASE_URI +
      'latest?access_key=' + this.API_KEY +
      '&symbols=' + this.SYMBOLS +
      '&format=1'
    );
  }
}
