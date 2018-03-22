import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { HomeComponent } from './home/home.component';
import { CurrencyListService } from './shared/currency-list.service';
import { CurrencyConverterService } from './shared/currency-converter.service';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyListComponent,
    CurrencyConverterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CurrencyListService, CurrencyConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
