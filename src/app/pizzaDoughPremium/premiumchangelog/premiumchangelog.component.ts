import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premiumchangelog',
  templateUrl: './premiumchangelog.component.html',
  styleUrls: ['./premiumchangelog.component.scss'],
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
export class PremiumchangelogComponent implements OnInit {

  history = [
    {version: "1.0.0 - 1.0.1", notes: "Private beta, initial working version"},
    {version: "1.0.2", notes: "Minor fix for updating calculator values <br />- Fixed asynchronous issue where updating a recipe would cause it to disappear (rare)"},
    {version: "1.0.3", notes: "Now available for beta testing"},
    {version: "1.0.4", notes: "Smoother animations on tab switching <br />- Styling fix around table <br />- Wording"},
    {version: "1.0.5", notes: "Now public <br />- Added persistent Measurement Type <br />- Fixed length error when string empty <br />- Cleaned up first-time dialog, added Dismiss button"},
    {version: "1.1.6", notes: "Can now toggle table details <br />- Style fixes and improvements <br />- Fixed bug where sloped pan value check failed"},
    {version: "1.1.7", notes: "Hotfix, permissions/plugin issue prevented app from working properly"},
    {version: "1.1.8", notes: "Fixes to showInfo toggle"},
    {version: "1.1.9", notes: "Allowing most preferment values to be 0 if desired (for now) <br />- Updated tooltips and FAQ regarding Sourdough (preferment) <br />- Fixed bug where preferment yeast amount wasn't sticking <br />- Fixed bug where yeast wouldn't show in Final Dough table <br />- Fixed bug where added ingredient values would clear when adding or removing <br />- Removed empty button <br />- Major speed improvements <br />- Proper spacing with table details"}, 
    {version: "1.1.10", notes: "Re-set Metric to default (not null) <br />- Better fix to added ingredients clearing"},
    {version: "1.1.11 ", notes: "Fix on displaying table"},
    {version: "1.1.12", notes: "Fixed bug where inputs had to be reset before table would generate properly"},
    {version: "1.2.12", notes: "New input validation. Missing required fields will be tagged (side-borders) in blue."},
    {version: "1.3.12", notes: "Feature: added Keep Screen On toggle to Recipe tab <br />- Made Recipe tab toolbar buttons visually toggle"},
    {version: "1.3.13", notes: "Fixed issue with type conversion from string to boolean, and fixed toggle permanence."},
    {version: "1.4.14", notes: "Feature: Now a Detailed instructions view with images and tooltips <br />- Now can hide instructions in Recipe tab <br />- Now portrait mode only. App had compatibility issues with landscape. Will revisit in the future if requested. <br />- Reduced app size by about 10%"},
    {version: "1.4.15", notes: "Reduced app size up to 52% of original size."},
    {version: "1.4.16", notes: "Fix typos, rewording, clarifications <br />- Many styling refinements and misc fixes"},
    {version: "1.4.17", notes: "Image fixes and optimization"},
    {version: "1.4.18", notes: "Redid FAQ and Tips <br />- Wording fixes"},
    {version: "1.5.20", notes: "Misc fixes <br />- Wording updates <br />- Feature: first draft of backup system using Android's native key:value backup system."},
    {version: "1.5.21", notes: "Wording <br />- Minor quick fix"},
    {version: "1.6.22", notes: "Bug fixes of all kinds <br />- Refinements <br />- Feature: Link (URL) parsing and generation, compatible with webapp <br />- Feature: Single JSON recipe sharing"},
    {version: "1.6.23", notes: "Fixed wording gap in first-time dialog"},
    {version: "1.6.24", notes: "Updated API target <br />- Clarified Imperial is U.S. Customary <br />- Wording"},
    {version: "1.6.25", notes: "US Customary wording"},
    {version: "1.6.27", notes: "Don’t allow cloud sync/backup if there are no recipes saved <br />- Fixed bug where changing salt type wouldn’t be reflected on the table"},
    {version: "1.6.28", notes: "Updated icon"},
    {version: "1.6.29", notes: "Corrected recipe instructions in regards to mixing"},
    {version: "1.6.30", notes: "Dark theme improvements"},
    {version: "1.7.0", notes: "At the expense of app size, I've moved all images to exist locally to improve loading and keep app totally offline <br />- New in-app timer"}, 
    {version: "1.7.1", notes: "Added more information about preferment in the tooltip<br />- Fixed dark mode for preferment table headers<br />- Changelogs can be accessed in About<br />- Fixed timer notifications to make them persistent, even if the app sleeps."},
    {version: "1.7.2", notes: "New chime"},
    {version: "1.7.3", notes: "Updates to wording<br />- Added tooltips<br />- Quality of life improvements"},
    {version: "1.7.4", notes: "Fixed typos and wording issues"},
    {version: "1.7.5", notes: "Fixed issue where Preferment by Total Water % could not go above the Hydration %.<br />- Fixed same issue with Yeast.<br />Thank you to the person who found this bug!"},
    {version: "1.7.6", notes: "Added a save button to the Calculator tab.<br />- Maintain order of saved recipes (consistently alphabetized).<br />- Fix notes to retain newlines and spacing.<br />- Flattened Saved Recipes and moved buttons down to allow more space on smaller screens."},
    {version: "1.7.7", notes: "Overhaul of Notes section<br />- Notes now support Markdown!"},
    {version: "1.7.8", notes: "Added Deeplinking (beta testing)<br />- Minor refactoring and cleanup"},
    {version: "1.8.0", notes: "Refinement to notes editor styling<br />- Tiny fixes"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
