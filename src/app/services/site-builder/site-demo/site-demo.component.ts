import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-demo',
  templateUrl: './site-demo.component.html',
  styleUrls: ['./site-demo.component.scss'],
  animations: [
    // Trigger animation cards array
    trigger("cardAnimation", [
      // Transition from any state to any state
      transition("* => *", [
        // Initially the all cards are not visible
        query(":enter", style({ opacity: 0 }), { optional: true }),

        // Each card will appear sequentially with the delay of 300ms
        query(
          ":enter",
          stagger("45ms", [
            animate(
              ".5s ease-in",
              keyframes([
                style({
                  opacity: 0,
                  transform: "translateY(-10px) scale(1.05)",
                  offset: 0,
                }),
                style({
                  opacity: 0.5,
                  transform: "translateY(-5px) scale(1)",
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: "translateY(0)", offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),

        // Cards will disappear sequentially with the delay of 300ms
/*         query(
          ":leave",
          stagger("6ms", [
            animate(
              "350ms ease-out",
              keyframes([
                style({ opacity: 1, transform: "translateY(0px)", offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: "translateY(5px)",
                  offset: 0.3,
                }),
                style({
                  opacity: 0,
                  transform: "translateY(10px) scale(.995)",
                  offset: 1,
                }),
              ])
            ),
          ]),
          { optional: true }
        ), */
      ]),
    ]),
    trigger("cardAnimationNoStagger", [
      transition(":enter", [
        animate(
          ".5s ease-out",
          keyframes([
            style({
              opacity: 0,
              transform: "translateY(-6px) scale(1.05)",
              offset: 0,
            }),
            style({ opacity: 1, transform: "translateY(0)", offset: 1 }),
          ])
        ),
      ]),
/*       transition(":leave", [
        style({ opacity: 1, transform: "translateY(0)", offset: 0 }),
        animate(
          ".35s ease-out",
          style({
            opacity: 0,
            transform: "translateY(6px) scale(1.05)",
            offset: 1,
          })
        ),
      ]), */
    ]),
  ],
})
export class SiteDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
