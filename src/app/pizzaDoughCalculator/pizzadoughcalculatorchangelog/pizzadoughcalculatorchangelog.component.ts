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
   {version: "1.0.1", notes: "Open for beta testing"},
   {version: "1.0.2 ", notes: "Minor fixes <br />- Typo"},
   {version: "1.0.4", notes: "Synchronizing versioning <br />- Style fixes around table <br />- Wording updates <br />- Fixed Premium link"},
   {version: "1.0.5", notes: "Now public <br />- Added persistent Measurement Type <br />- Dismiss button and other changes to first-time dialog"},
   {version: "1.1.6", notes: "Can now toggle table details <br />- Style fixes and improvements <br />- Fixed bug where sloped pan value check failed"},
   {version: "1.1.8", notes: "Fixes to showInfo toggle"},
   {version: "1.1.9", notes: "Allowing most preferment values to be 0 if desired (for now) <br />- Updated tooltips and FAQ regarding Sourdough (preferment) <br />- Fixed bug where preferment yeast amount wasn't sticking <br />- Fixed bug where yeast wouldn't show in Final Dough table <br />- Fixed bug where added ingredient values would clear when adding or removing <br />- Removed empty button <br />- Major speed improvements <br />- Proper spacing with table details"}, 
   {version: "1.1.10", notes: "Re-set Metric to default (not null) <br />- Better fix to added ingredients clearing"},
   {version: "1.1.11 ", notes: "Fix on displaying table"},
   {version: "1.1.12", notes: "Fixed bug where inputs had to be reset before table would generate properly"},
   {version: "1.2.12", notes: "New input validation. Missing required fields will be tagged (side-borders) in blue."},
   {version: "1.3.12", notes: "Feature: added Keep Screen On toggle to Recipe tab <br />- Made Recipe tab toolbar buttons visually toggle"},
   {version: "1.3.13", notes: "Fixed issue with type conversion from string to boolean, and fixed toggle permanence."},
   {version: "1.4.14", notes: "Feature: Now a Detailed instructions view with images and tooltips <br />- Now can hide instructions in Recipe tab <br />- Now portrait mode only. App had compatibility issues with landscape. Will revisit in the future if requested.  <br />- Reduced app size by about 15%"},
   {version: "1.4.15", notes: "Reduced app size up to 55% of original size."},
   {version: "1.4.16", notes: "Fix typos, rewording, clarifications <br />- Many styling refinements and misc fixes"},
   {version: "1.4.17", notes: "Image fixes and optimization"},
   {version: "1.4.18", notes: "Redid FAQ and Tips <br />- Wording fixes"},
   {version: "1.5.20", notes: "Misc fixes <br />- Wording updates <br />- Version matching"},
   {version: "1.5.21", notes: "Wording"},
   {version: "1.6.22", notes: "Version matching <br />- Wording updates"},
   {version: "1.6.23", notes: "Fixed wording gap in first-time dialog"},
   {version: "1.6.24", notes: "Updated API target <br />- Clarified Imperial is U.S. Customary"},
   {version: "1.6.25", notes: "US Customary wording"},
   {version: "1.6.27", notes: "Fixed bug where changing salt type wouldn’t be reflected on the table"},
   {version: "1.6.28", notes: "Updated icon"},
   {version: "1.6.29", notes: "Corrected recipe instructions in regards to mixing"},
   {version: "1.7.0", notes: "At the expense of app size, I've moved all images to exist locally to improve loading and keep app totally offline"}, 
   {version: "1.7.1", notes: "Added more information about preferment in the tooltip<br />- Changelogs can be accessed in About"},
   {version: "1.7.2", notes: "Version matching"},
   {version: "1.7.3", notes: "Updates to wording<br />- Added tooltips<br />- Quality of life improvements"},
   {version: "1.7.4", notes: "Fixed typos and wording issues"},
   {version: "1.7.5", notes: "Fixed issue where Preferment by Total Water % could not go above the Hydration %.<br />Fixed same issue with Yeast.<br />Thank you to the person who found this bug!"},
   {version: "1.8.1", notes: "New preferment tooltips<br />- Better UI for small devices<br />- Misc minor updates and fixes"},
   {version: "1.8.2", notes: "Cleanup, simplifying, and adding an FAQ"},
]

  constructor() { }

  ngOnInit(): void {
  }

}
