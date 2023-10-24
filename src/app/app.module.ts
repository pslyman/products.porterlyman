import { HomeComponent } from './home/home.component';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { PizzaDoughPremium } from "./pizzaDoughPremium/pizzaDoughPremium.component";
import { PizzaDoughCalculator } from "./pizzaDoughCalculator/pizzaDoughCalculator.component";
import { PizzaDoughCalculatorChangeLog } from "./pizzaDoughCalculator/pizzadoughcalculatorchangelog/pizzadoughcalculatorchangelog.component";
import { PremiumchangelogComponent } from "./pizzaDoughPremium/premiumchangelog/premiumchangelog.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PDPproductDetailsComponent } from './pizzaDoughPremium/pdpproduct-details/pdpproduct-details.component';
import { PDCproductDetailsComponent } from './pizzaDoughCalculator/pdcproduct-details/pdcproduct-details.component';
import { BothPizzaAppsComponent } from './both-pizza-apps/both-pizza-apps.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PizzaDoughPremium,
    PizzaDoughCalculator,
    PizzaDoughCalculatorChangeLog,
    PremiumchangelogComponent,
    HomeComponent,
    PDPproductDetailsComponent,
    PDCproductDetailsComponent,
    BothPizzaAppsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
