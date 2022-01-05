import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pdcproduct-details",
  templateUrl: "./pdcproduct-details.component.html",
  styleUrls: ["./pdcproduct-details.component.scss"],
  animations: [
    trigger("cardAnimationNoStagger", [
      transition(":enter", [
        animate(
          ".6s ease-out",
          keyframes([
            style({
              opacity: 0,
              transform: "translateY(-6px)",
              offset: 0,
            }),
            style({ opacity: 1, transform: "translateY(0)", offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class PDCproductDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  googlePlay() {
    window.open(
      "https://play.google.com/store/apps/details?id=pizza.dough.calculator.free",
      "_blank"
    );
  }

  
  openInAppStore() {
    window.open("https://apps.apple.com/us/app/pizza-dough-calculator-free/id1602635238", "_blank");
  }
}
