import { AppBuilderComponent } from "./services/app-builder/app-builder.component";
import { SiteBuilderComponent } from "./services/site-builder/site-builder.component";
import { ServicesComponent } from "./services/services.component";
import { OTFproductDetailsComponent } from "./openTrackFit/otfproduct-details/otfproduct-details.component";
import { OpenTrackFit } from "./openTrackFit/openTrackFit.component";
import { PizzaDoughPremium } from "./pizzaDoughPremium/pizzaDoughPremium.component";
import { PizzaDoughCalculator } from "./pizzaDoughCalculator/pizzaDoughCalculator.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PizzaDoughCalculatorChangeLog } from "./pizzaDoughCalculator/pizzadoughcalculatorchangelog/pizzadoughcalculatorchangelog.component";
import { PremiumchangelogComponent } from "./pizzaDoughPremium/premiumchangelog/premiumchangelog.component";
import { OpenTrackFitChangelogComponent } from "./openTrackFit/opentrackfitchangelog/opentrackfitchangelog.component";
import { HomeComponent } from "./home/home.component";
import { PDPproductDetailsComponent } from "./pizzaDoughPremium/pdpproduct-details/pdpproduct-details.component";
import { PDCproductDetailsComponent } from "./pizzaDoughCalculator/pdcproduct-details/pdcproduct-details.component";

const routes: Routes = [
  {
    path: "builder",
    component: HomeComponent,
  },
  {
    path: "PizzaDoughCalculator",
    component: PizzaDoughCalculator,

    children: [
      {
        path: "changelog",
        component: PizzaDoughCalculatorChangeLog,
      },
      { path: "about", component: PDCproductDetailsComponent },
      {
        path: "PizzaDoughCalculator/**",
        redirectTo: "/pageNotFound",
        pathMatch: "full",
      },
      {
        path: "",
        redirectTo: "/PizzaDoughCalculator/about",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "PizzaDoughPremium",
    component: PizzaDoughPremium,
    children: [
      {
        path: "changelog",
        component: PremiumchangelogComponent,
      },
      { path: "about", component: PDPproductDetailsComponent },
      {
        path: "PizzaDoughPremium/**",
        redirectTo: "/pageNotFound",
        pathMatch: "full",
      },
      {
        path: "",
        redirectTo: "/PizzaDoughPremium/about",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "OpenTrackFit",
    component: OpenTrackFit,
    children: [
      {
        path: "changelog",
        component: OpenTrackFitChangelogComponent,
      },
      { path: "about", component: OTFproductDetailsComponent },
      {
        path: "OpenTrackFit/**",
        redirectTo: "/pageNotFound",
        pathMatch: "full",
      },
      {
        path: "",
        redirectTo: "/OpenTrackFit/about",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "services",
    component: ServicesComponent,
    children: [
      {
        path: "site-builder",
        component: SiteBuilderComponent,
      },
      { path: "app-builder", component: AppBuilderComponent },
      {
        path: "services/**",
        redirectTo: "/pageNotFound",
        pathMatch: "full",
      },
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
    ],
  },
  { path: "home", redirectTo: "/builder", pathMatch: "full" },
  { path: "", redirectTo: "/builder", pathMatch: "full" },
  { path: "**", redirectTo: "/pageNotFound", pathMatch: "full" },
  { path: "pageNotFound", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
