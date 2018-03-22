import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SendConversion } from './send-conversion';
import { ReceiveConversion } from './receive-conversion';
import { CurrencyList } from './currency-list';

@Injectable()
export class CurrencyConverterService {

  private BASE_URI = 'http://data.fixer.io/api/';
  private API_KEY = '4168daaa3eb1e1f0408c94c9e01f3fa5';

  constructor(private http: HttpClient) { }

  queryConversion(conversion: SendConversion): Observable<ReceiveConversion> {
    return this.http.get<ReceiveConversion>(
      this.BASE_URI +
      'convert?access_key=' + this.API_KEY +
      '&from=' + conversion.from +
      '&to=' + conversion.to +
      '&amount=' + conversion.amount
    );
  }

  getCurrencyList(): Observable<CurrencyList> {
    return this.http.get<CurrencyList>(
      this.BASE_URI +
      'symbols?access_key=' + this.API_KEY
    );
  }

}
