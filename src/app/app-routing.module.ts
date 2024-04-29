import { PizzaDoughPremium } from "./pizzaDoughPremium/pizzaDoughPremium.component";
import { PizzaDoughCalculator } from "./pizzaDoughCalculator/pizzaDoughCalculator.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PizzaDoughCalculatorChangeLog } from "./pizzaDoughCalculator/pizzadoughcalculatorchangelog/pizzadoughcalculatorchangelog.component";
import { PremiumchangelogComponent } from "./pizzaDoughPremium/premiumchangelog/premiumchangelog.component";
import { PDPproductDetailsComponent } from "./pizzaDoughPremium/pdpproduct-details/pdpproduct-details.component";
import { PDCproductDetailsComponent } from "./pizzaDoughCalculator/pdcproduct-details/pdcproduct-details.component";
import { BothPizzaAppsComponent } from "./both-pizza-apps/both-pizza-apps.component";
import { DoughRecipesComponent } from "./dough-recipes/dough-recipes.component";

const routes: Routes = [
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
    path: "PizzaApps",
    component: BothPizzaAppsComponent,
    pathMatch: "full",
  },
  {
    path: "miscellaneous-dough-recipes",
    component: DoughRecipesComponent,
    pathMatch: "full",
  },
  { path: "home", redirectTo: "/home", pathMatch: "full" },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/pageNotFound", pathMatch: "full" },
  { path: "pageNotFound", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
