import { HomeComponent } from './home/home.component';
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
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OTFproductDetailsComponent } from './openTrackFit/otfproduct-details/otfproduct-details.component';
import { PDPproductDetailsComponent } from './pizzaDoughPremium/pdpproduct-details/pdpproduct-details.component';
import { PDCproductDetailsComponent } from './pizzaDoughCalculator/pdcproduct-details/pdcproduct-details.component';
import { ServicesComponent } from './services/services.component';
import { SiteBuilderComponent } from './services/site-builder/site-builder.component';
import { AppBuilderComponent } from './services/app-builder/app-builder.component';
import { SiteDemoComponent } from './services/site-builder/site-demo/site-demo.component';
import { SocialLinkerComponent } from './social-linker/social-linker.component';
import { SociallinkerDetailsComponent } from './social-linker/sociallinker-details/sociallinker-details.component';
import { BothPizzaAppsComponent } from './both-pizza-apps/both-pizza-apps.component';

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
    HomeComponent,
    OTFproductDetailsComponent,
    PDPproductDetailsComponent,
    PDCproductDetailsComponent,
    ServicesComponent,
    SiteBuilderComponent,
    AppBuilderComponent,
    SiteDemoComponent,
    SocialLinkerComponent,
    SociallinkerDetailsComponent,
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
