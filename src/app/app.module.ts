import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { OpenTrackFit } from "./openTrackFit/openTrackFit.component";
import { PizzaDoughPremium } from "./pizzaDoughPremium/pizzaDoughPremium.component";
import { PizzaDoughCalculator } from "./pizzaDoughCalculator/pizzaDoughCalculator.component";
import { PizzaDoughCalculatorChangeLog } from "./pizzaDoughCalculator/pizzadoughcalculatorchangelog/pizzadoughcalculatorchangelog.component";
import { PremiumchangelogComponent } from "./pizzaDoughPremium/premiumchangelog/premiumchangelog.component";
import { OpenTrackFitChangelogComponent } from "./openTrackFit/opentrackfitchangelog/opentrackfitchangelog.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    OpenTrackFit,
    PizzaDoughPremium,
    PizzaDoughCalculator,
    PizzaDoughCalculatorChangeLog,
    PremiumchangelogComponent,
    OpenTrackFitChangelogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
