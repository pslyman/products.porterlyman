import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-site-builder',
  templateUrl: './site-builder.component.html',
  styleUrls: ['./site-builder.component.scss'],
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
export class SiteBuilderComponent implements OnInit {
  features = [
    {
      id: 1,
      title: "Custom Domain Options",
      content: `Free subdomain: <em>yourBusinessName.devlay.com</em>.<br />
      Custom domain: <em>yourBusinessName.com</em>.<br /><br />
      Custom domains usually run $12 a year to buy/own. I won't charge you a dime
      more than that.<br /><br />
      Either way, if the name is unclaimed, it's yours! <br />`,
      toggled: false,
    },
    {
      id: 2,
      title: "SSL Certification",
      content: `All you need to know is that this offers code encryption, turns your http
      into https, and is the safest way to host a website today. <br />`,
      toggled: false,
    },
    {
      id: 3,
      title: "Full Access and Transparency",
      content: `You have full access to the codebase, hosting platform, and domain provider.
      After the first year, if you want to take over the code and hosting, you can
      assume full ownership and end our business relationship.<br />`,
      toggled: false,
    },
    {
      id: 4,
      title: "Email Aliasing",
      content: `Available with purchase of a custom domain. <br /><br />I will help you set up an email alias to work along side your existing Gmail
      account at no extra cost. What does this mean? <br /><br />
      As an example, if your email is JohnDoe@Gmail.com, and you own the domain
      JohnsRepairShop.com, you'd have an added option to send emails from
      mail@JohnsRepairShop.com, as well as receive emails under that address.
      <br /><br />This option is available at no extra cost, you will just need to
      be available for a Zoom call so I can help you set it up.<br /><br />
  
      Note: If you'd like to set up additional emails associated with that domain
      (for employees), there are
      <a href="https://workspace.google.com/pricing.html">options</a> available
      externally to set that up. <br />`,
      toggled: false,
    },
    {
      id: 5,
      title: "Designs",
      content: `Over 50% of web access worldwide is done from a mobile device, so I build
      websites that scale to any size.<br /><br />
      Do you have certain web designs you like? Let me know! Otherwise, I can
      surprise you. Sites are always tweakable, and can be morphed as you provide
      input. I'm flexible.`,
      toggled: false,
    },
    {
      id: 6,
      title: "Maintanance",
      content: `Need to make changes to a website? You have two easy options: <br /><br />
      <span class="indented"
        >1. Let me handle it, just tell me what you want changed.<br
      /></span>
      <span class="indented"
        >2. You can do it too! I build my websites to be easy to edit. I can walk
        you through how to make text changes or add images. No coding experience
        needed! This is a good option if your website needs to be updated
        frequently. <br
      /></span>`,
      toggled: false,
    },
    {
      id: 7,
      title: "Analytics",
      content: `Google Analytics is technically free, but takes some work to integrate.
      For a fee I can add analytics integration to your website.`,
      toggled: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  openFeatures(id) {
    const matchedItem = this.features.find((item) => {
      return item.id === id;
    });

    if (matchedItem) {
      matchedItem.toggled = !matchedItem.toggled;
    }
  }
}
