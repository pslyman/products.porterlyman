import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";

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
  constructor() {}

  ngOnInit(): void {}

  googlePlay() {
    window.open(
      "https://play.google.com/store/apps/details?id=pizza.dough.calculator.free",
      "_blank"
    );
  }

  openInAppStore() {
    window.open(
      "https://apps.apple.com/us/app/pizza-dough-premium/id1602635238",
      "_blank"
    );
  }
}
