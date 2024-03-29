import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-both-pizza-apps",
  templateUrl: "./both-pizza-apps.component.html",
  styleUrls: ["./both-pizza-apps.component.scss"],
  animations: [
    trigger("cardAnimationNoStagger", [
      transition(":enter", [
        animate(
          ".6s ease-out",
          keyframes([
            style({
              opacity: 0,
              offset: 0,
            }),
            style({ opacity: 1, offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class BothPizzaAppsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  specifyPlatform = false;
  isiOS = false;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (Object.entries(params).length > 0) {
        this.specifyPlatform = true;
        this.isiOS = params.platform === "ios";
      }
    });
  }

  allPlatforms() {
    const qParams: Params = {};
    this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: qParams,
        queryParamsHandling: ''
    }).then(() => {
      this.specifyPlatform = false;
    });
  }

  googlePlayFree() {
    window.open(
      "https://play.google.com/store/apps/details?id=pizza.dough.calculator.free",
      "_blank"
    );
  }

  openInAppStoreFree() {
    window.open(
      "https://apps.apple.com/us/app/pizza-dough-calculator-basic/id1602635238",
      "_blank"
    );
  }

  googlePlayPremium() {
    window.open(
      "https://play.google.com/store/apps/details?id=pizza.dough.calculator",
      "_blank"
    );
  }

  openInAppStorePremium() {
    window.open(
      "https://apps.apple.com/us/app/pizza-dough-premium/id1597616314",
      "_blank"
    );
  }
}
