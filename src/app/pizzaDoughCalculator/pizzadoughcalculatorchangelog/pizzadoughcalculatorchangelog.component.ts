import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizzadoughcalculatorchangelog',
  templateUrl: './pizzadoughcalculatorchangelog.component.html',
  styleUrls: ['./pizzadoughcalculatorchangelog.component.scss'],
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
export class PizzaDoughCalculatorChangeLog implements OnInit {

  history = [
    { version: "1.0.1", notes: "Open for beta testing" },
    { version: "1.0.2 ", notes: "Minor fixes <br />- Typo" },
    { version: "1.0.4", notes: "Synchronizing versioning <br />- Style fixes around table <br />- Wording updates <br />- Fixed Premium link" },
    { version: "1.0.5", notes: "Now public <br />- Added persistent Measurement Type <br />- Dismiss button and other changes to first-time dialog" },
    { version: "1.1.6", notes: "Can now toggle table details <br />- Style fixes and improvements <br />- Fixed bug where sloped pan value check failed" },
    { version: "1.1.8", notes: "Fixes to showInfo toggle" },
    { version: "1.1.9", notes: "Allowing most preferment values to be 0 if desired (for now) <br />- Updated tooltips and FAQ regarding Sourdough (preferment) <br />- Fixed bug where preferment yeast amount wasn't sticking <br />- Fixed bug where yeast wouldn't show in Final Dough table <br />- Fixed bug where added ingredient values would clear when adding or removing <br />- Removed empty button <br />- Major speed improvements <br />- Proper spacing with table details" },
    { version: "1.1.10", notes: "Re-set Metric to default (not null) <br />- Better fix to added ingredients clearing" },
    { version: "1.1.11 ", notes: "Fix on displaying table" },
    { version: "1.1.12", notes: "Fixed bug where inputs had to be reset before table would generate properly" },
    { version: "1.2.12", notes: "New input validation. Missing required fields will be tagged (side-borders) in blue." },
    { version: "1.3.12", notes: "Feature: added Keep Screen On toggle to Recipe tab <br />- Made Recipe tab toolbar buttons visually toggle" },
    { version: "1.3.13", notes: "Fixed issue with type conversion from string to boolean, and fixed toggle permanence." },
    { version: "1.4.14", notes: "Feature: Now a Detailed instructions view with images and tooltips <br />- Now can hide instructions in Recipe tab <br />- Now portrait mode only. App had compatibility issues with landscape. Will revisit in the future if requested.  <br />- Reduced app size by about 15%" },
    { version: "1.4.15", notes: "Reduced app size up to 55% of original size." },
    { version: "1.4.16", notes: "Fix typos, rewording, clarifications <br />- Many styling refinements and misc fixes" },
    { version: "1.4.17", notes: "Image fixes and optimization" },
    { version: "1.4.18", notes: "Redid FAQ and Tips <br />- Wording fixes" },
    { version: "1.5.20", notes: "Misc fixes <br />- Wording updates <br />- Version matching" },
    { version: "1.5.21", notes: "Wording" },
    { version: "1.6.22", notes: "Version matching <br />- Wording updates" },
    { version: "1.6.23", notes: "Fixed wording gap in first-time dialog" },
    { version: "1.6.24", notes: "Updated API target <br />- Clarified Imperial is U.S. Customary" },
    { version: "1.6.25", notes: "US Customary wording" },
    { version: "1.6.27", notes: "Fixed bug where changing salt type wouldn’t be reflected on the table" },
    { version: "1.6.28", notes: "Updated icon" },
    { version: "1.6.29", notes: "Corrected recipe instructions in regards to mixing" },
    { version: "1.7.0", notes: "At the expense of app size, I've moved all images to exist locally to improve loading and keep app totally offline" },
    { version: "1.7.1", notes: "Added more information about preferment in the tooltip<br />- Changelogs can be accessed in About" },
    { version: "1.7.2", notes: "Version matching" },
    { version: "1.7.3", notes: "Updates to wording<br />- Added tooltips<br />- Quality of life improvements" },
    { version: "1.7.4", notes: "Fixed typos and wording issues" },
    { version: "1.7.5", notes: "Fixed issue where Preferment by Total Water % could not go above the Hydration %.<br />Fixed same issue with Yeast.<br />Thank you to the person who found this bug!" },
    { version: "1.8.1", notes: "New preferment tooltips<br />- Better UI for small devices<br />- Misc minor updates and fixes" },
    { version: "1.8.2", notes: "Cleanup, simplifying, and adding an FAQ" },
    { version: "1.8.4", notes: "Typos" },
    { version: "1.8.5", notes: 'Fixed "Pizza Shape" header position issue' },
    { version: "1.9.2", notes: 'Full Angular upgrade - latest version<br ->- Full Ionic upgrade - latest version<br ->- Updated visual design<br ->- Better accessability in all modes<br ->- Better device detection and localized testing<br ->- Streamlined code for the future of cross-platform compatibility<br ->- Little bit nicer animations<br ->- Looks nicer and works better on tablets' },
    { version: "1.10.6", notes: 'Remove font-size scaling with Android settings. I may revert this in the future with a better fix, but for now it causes issues with element overlap.'},
    { version: "1.10.12", notes: 'Unified codebase for cross-platform<br>- Allow orientation rotation on bigger devices, namely tablets<br>- Clarified wording in value placeholders from "Default" to "Typical" to avoid confusion, as being left empty will not default to any value.'},
    { version: "1.10.13", notes: 'Config issue with iPads not changing app orientation.'},
    { version: "1.10.14", notes: 'iOS status bar text color fix for notch-less devices.'},
    { version: "1.10.15", notes: '(iOS) Updated link to Premium Version on app store'},
    { version: "1.12.16", notes: 'About page renamed to Misc and now has tab dividers<br>- New setting: decimal precision<br>- Added Whole Wheat (including White Whole Wheat) and Rice Flour to the Additional Ingredients list<br>- Fixed duplicating FAQ bug.'},
    { version: "1.14.18", notes: 'Sorted Additional Ingredients alphabetically<br>- Split water and flour in the app<br>- Pan diagram ported to app and sized up<br>- Bug fixes'},
    { version: "1.14.19-1.14.24", notes: 'Bug fixes'},
    { version: "1.14.24", notes: `Fixed water/flour swapping bug.<br>- If any of your recipes experienced a water/flour swap during the time this bug was happening, you can scroll down to Split Flour and Split Water sections. If you don't split values, you can hit the respective reset buttons, otherwise you'll need to manually switch the values and names.`},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
