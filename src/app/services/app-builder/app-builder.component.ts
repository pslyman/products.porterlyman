import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-app-builder",
  templateUrl: "./app-builder.component.html",
  styleUrls: ["./app-builder.component.scss"],
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
export class AppBuilderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
