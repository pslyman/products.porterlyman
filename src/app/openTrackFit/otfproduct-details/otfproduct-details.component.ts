import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-otfproduct-details",
  templateUrl: "./otfproduct-details.component.html",
  styleUrls: ["./otfproduct-details.component.scss"],
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
export class OTFproductDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  googlePlay() {
    window.open(
      "https://play.google.com/store/apps/details?id=plskye.openFit",
      "_blank"
    );
  }
}
