import { Component, OnInit, AfterContentInit } from "@angular/core";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
} from "@angular/animations";
import { interval as observableInterval } from "rxjs";
import { takeWhile, scan, tap } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: `./home.component.html`,
  styleUrls: ["./home.component.scss"],
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
export class HomeComponent implements OnInit, AfterContentInit {
  constructor(private router: Router) {}

  p: string;
  i: number;

  title = "Products";

  portfolioServices = [
    {
      title: "Portfolio Builder",
      text:
        "Looking to show off your business, personal resume, portfolio? Need a landing page for public presence? I can help. Click here to learn more.",
      link: "/services/site-builder"/* ,
      source: "", */
    },
    {
      title: "App Builder",
      text:
        "For small handheld projcets, when PWAs won't cut it.",
      link: "/services/app-builder"/* ,
      source: "", */
    }
  ];

  portfolioApps = [
    {
      title: "Pizza Dough Calculator",
      text:
        "Passion product, using 20 year-old formulas and bringing the well known app into your hands. The original version. ",
      link: "/PizzaDoughCalculator/about",
      source: "../assets/pizza-free.png",
    },
    {
      title: "Pizza Dough Premium",
      text:
        "Same full-featured product, but with added premium features for the extra dedicated pizza chefs.",
        link: "/PizzaDoughPremium/about",
      source: "../assets/pizza-icon.png",
    },

    {
      title: "OpenTrackFit",
      text:
        "Open Source app project for workout tracking. Includes in-app timers, prioritization, and other useful features for tracking.",
        link: "/OpenTrackFit/about",
      source: "../assets/opentrackfit-icon.png",
    },
  ];

  portfolioSites = [
    {
      title: "St. George Embossing",
      text:
        "Made in partnership with the owner (and good friend) of St. George Embossing as a front for his business.",
      link: "http://www.stgembossing.com",
      source: "../assets/embossing-stg.png",
    },
    {
      title: "porterlyman.com",
      text: "Of which this is a subdomain of.",
      link: "http://www.porterlyman.com",
      source: "../assets/pl-icon.png",
    },
  ];

  portfolioMisc = [
    {
      title: "clean-card",
      text:
        "Open source version of porterlyman.com with a setup and hosting guide, including buying/setting up a domain, hosting, and email aliasing. Powered by Angular and Heroku.",
      link: "https://github.com/pslyman/clean-card",
      source: "../assets/clean-cards-icon.png",
    },
    {
      title: "Github/pslyman",
      text: "Miscellenious contributions, side projects, and hobbies.",
      link: "https://github.com/pslyman?tab=repositories",
      source: "../assets/github-icon.png",
    },
  ];

  ngOnInit() {}

  ngAfterContentInit(): void {}

  stopPropagation(e) {
    e.stopPropagation();
  }

  openLinkUrl(url) {
    if (url) {
      if (url.includes("http")) {
        window.open(url, "_blank");
      } else {
        this.router.navigateByUrl(url.toString());
      }
    }
  }

  jumpToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  scrollToTop(el) {
    const duration = 200;
    const interval = 5;
    const move = (el.scrollTop * interval) / duration;
    observableInterval(interval)
      .pipe(
        scan((acc, curr) => acc - move, el.scrollTop),
        tap((position) => (el.scrollTop = position)),
        takeWhile((val) => val > 0)
      )
      .subscribe();
  }
}
