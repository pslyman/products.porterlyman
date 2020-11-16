import { OpenTrackFit } from "./openTrackFit/openTrackFit.component";
import { PizzaDoughPremium } from "./pizzaDoughPremium/pizzaDoughPremium.component";
import { PizzaDoughCalculator } from "./pizzaDoughCalculator/pizzaDoughCalculator.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PizzaDoughCalculatorChangeLog } from "./pizzaDoughCalculator/pizzadoughcalculatorchangelog/pizzadoughcalculatorchangelog.component";
import { PremiumchangelogComponent } from "./pizzaDoughPremium/premiumchangelog/premiumchangelog.component";
import { OpenTrackFitChangelogComponent } from "./openTrackFit/opentrackfitchangelog/opentrackfitchangelog.component";

const routes: Routes = [
  {
    path: "PizzaDoughCalculator",
    component: PizzaDoughCalculator,
    children: [
      {
        path: "changelog",
        component: PizzaDoughCalculatorChangeLog,
      },

      {
        path: "**",
        redirectTo: "/pageNotFound",
        pathMatch: "full",
      },
      {
        path: "",
        redirectTo: "/pageNotFound",
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

      {
        path: "**",
        redirectTo: "/pageNotFound",
        pathMatch: "full",
      },
      {
        path: "",
        redirectTo: "/pageNotFound",
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

      {
        path: "**",
        redirectTo: "/pageNotFound",
        pathMatch: "full",
      },
      {
        path: "",
        redirectTo: "/pageNotFound",
        pathMatch: "full",
      },
    ],
  },

  { path: "", redirectTo: "/pageNotFound", pathMatch: "full" },
  { path: "**", redirectTo: "/pageNotFound", pathMatch: "full" },
  { path: "pageNotFound", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
