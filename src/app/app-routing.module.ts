import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'converter', component: CurrencyConverterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
