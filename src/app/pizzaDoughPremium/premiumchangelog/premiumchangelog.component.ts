import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { knownIssues, featureRequests } from '../../constants';

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
  issues = knownIssues;
  requests = featureRequests;

  viewAll = false;

  history = [
    { version: "1.0.0 - 1.0.1", notes: "Private beta, initial working version" },
    { version: "1.0.2", notes: "Minor fix for updating calculator values <br />- Fixed asynchronous issue where updating a recipe would cause it to disappear (rare)" },
    { version: "1.0.3", notes: "Now available for beta testing" },
    { version: "1.0.4", notes: "Smoother animations on tab switching <br />- Styling fix around table <br />- Wording" },
    { version: "1.0.5", notes: "Now public <br />- Added persistent Measurement Type <br />- Fixed length error when string empty <br />- Cleaned up first-time dialog, added Dismiss button" },
    { version: "1.1.6", notes: "Can now toggle table details <br />- Style fixes and improvements <br />- Fixed bug where sloped pan value check failed" },
    { version: "1.1.7", notes: "Hotfix, permissions/plugin issue prevented app from working properly" },
    { version: "1.1.8", notes: "Fixes to showInfo toggle" },
    { version: "1.1.9", notes: "Allowing most preferment values to be 0 if desired (for now) <br />- Updated tooltips and FAQ regarding Sourdough (preferment) <br />- Fixed bug where preferment yeast amount wasn't sticking <br />- Fixed bug where yeast wouldn't show in Final Dough table <br />- Fixed bug where added ingredient values would clear when adding or removing <br />- Removed empty button <br />- Major speed improvements <br />- Proper spacing with table details" },
    { version: "1.1.10", notes: "Re-set Metric to default (not null) <br />- Better fix to added ingredients clearing" },
    { version: "1.1.11 ", notes: "Fix on displaying table" },
    { version: "1.1.12", notes: "Fixed bug where inputs had to be reset before table would generate properly" },
    { version: "1.2.12", notes: "New input validation. Missing required fields will be tagged (side-borders) in blue." },
    { version: "1.3.12", notes: "Feature: added Keep Screen On toggle to Recipe tab <br />- Made Recipe tab toolbar buttons visually toggle" },
    { version: "1.3.13", notes: "Fixed issue with type conversion from string to boolean, and fixed toggle permanence." },
    { version: "1.4.14", notes: "Feature: Now a Detailed instructions view with images and tooltips <br />- Now can hide instructions in Recipe tab <br />- Now portrait mode only. App had compatibility issues with landscape. Will revisit in the future if requested. <br />- Reduced app size by about 10%" },
    { version: "1.4.15", notes: "Reduced app size up to 52% of original size." },
    { version: "1.4.16", notes: "Fix typos, rewording, clarifications <br />- Many styling refinements and misc fixes" },
    { version: "1.4.17", notes: "Image fixes and optimization" },
    { version: "1.4.18", notes: "Redid FAQ and Tips <br />- Wording fixes" },
    { version: "1.5.20", notes: "Misc fixes <br />- Wording updates <br />- Feature: first draft of backup system using Android's native key:value backup system." },
    { version: "1.5.21", notes: "Wording <br />- Minor quick fix" },
    { version: "1.6.22", notes: "Bug fixes of all kinds <br />- Refinements <br />- Feature: Link (URL) parsing and generation, compatible with webapp <br />- Feature: Single JSON recipe sharing" },
    { version: "1.6.23", notes: "Fixed wording gap in first-time dialog" },
    { version: "1.6.24", notes: "Updated API target <br />- Clarified Imperial is U.S. Customary <br />- Wording" },
    { version: "1.6.25", notes: "US Customary wording" },
    { version: "1.6.27", notes: "Don’t allow cloud sync/backup if there are no recipes saved <br />- Fixed bug where changing salt type wouldn’t be reflected on the table" },
    { version: "1.6.28", notes: "Updated icon" },
    { version: "1.6.29", notes: "Corrected recipe instructions in regards to mixing" },
    { version: "1.6.30", notes: "Dark theme improvements" },
    { version: "1.7.0", notes: "At the expense of app size, I've moved all images to exist locally to improve loading and keep app totally offline <br />- New in-app timer" },
    { version: "1.7.1", notes: "Added more information about preferment in the tooltip<br />- Fixed dark mode for preferment table headers<br />- Changelogs can be accessed in About<br />- Fixed timer notifications to make them persistent, even if the app sleeps." },
    { version: "1.7.2", notes: "New chime" },
    { version: "1.7.3", notes: "Updates to wording<br />- Added tooltips<br />- Quality of life improvements" },
    { version: "1.7.4", notes: "Fixed typos and wording issues" },
    { version: "1.7.5", notes: "Fixed issue where Preferment by Total Water % could not go above the Hydration %.<br />- Fixed same issue with Yeast.<br />Thank you to the person who found this bug!" },
    { version: "1.7.6", notes: "Added a save button to the Calculator tab.<br />- Maintain order of saved recipes (consistently alphabetized).<br />- Fix notes to retain newlines and spacing.<br />- Flattened Saved Recipes and moved buttons down to allow more space on smaller screens." },
    { version: "1.7.7", notes: "Overhaul of Notes section<br />- Notes now support Markdown!" },
    { version: "1.7.8", notes: "Added Deeplinking (beta testing)<br />- Minor refactoring and cleanup" },
    { version: "1.8.0", notes: "Refinement to notes editor styling<br />- Tiny fixes" },
    { version: "1.8.2", notes: "Cleanup, simplifying, and adding an FAQ<br />- Clarified wording in sync backup button" },
    { version: "1.8.4", notes: "Typo" },
    { version: "1.8.5", notes: 'Fixed "Pizza Shape" header position issue' },
    { version: "1.9.0", notes: 'Full Angular upgrade - latest version<br ->- Full Ionic upgrade - latest version<br ->- Updated visual design<br ->- Better accessability in all modes<br ->- Better device detection and localized testing<br ->- Streamlined code for the future of cross-platform compatibility<br ->- Better experience with notes, section; keyboard opens automatically<br ->- Little bit nicer animations<br ->- Looks nicer and works better on tablets' },
    { version: "1.9.2", notes: 'Fix to Cloud Settings merging, not replacing<br ->- Fixed visual bug within notes' },
    { version: "1.10.4", notes: 'Cloud backups occur automatically now<br> - Option to export and import a JSON file'},
    { version: "1.10.6", notes: `Remove font-size scaling with Android settings. I may revert this in the future with a better fix, but for now it causes issues with element overlap. <br> - Remove requirement for storage permissions<br> - Permission-less backups/restore using a JSON file will happen in the app's external scoped directory. More details in the app.`},
    { version: "1.10.7", notes: 'Correction of wording'},
    { version: "1.10.9", notes: 'First completed multi-platform build, including Android, iOS, and Web<br>- Public beta started for iOS'},
    { version: "1.10.10", notes: 'Fixed keyboard behavior on iOS.'},
    { version: "1.10.12", notes: 'Fixed (webapp and app) issues with QR codes not opening in the app sometimes.<br>- Fixed issue where sharing recipe links may enter "null" into title and notes, if previously left empty.<br>- Allow orientation rotation on bigger devices, namely tablets.<br>- Clarified wording in value placeholders from "Default" to "Typical" to avoid confusion, as being left empty will not default to any value.<br>- Fixed visual bug with notes fadeout'},
    { version: "1.10.13", notes: 'Config issue with iPads not changing app orientation.'},
    { version: "1.10.14", notes: 'iOS status bar text color fix for notch-less devices.'},
    { version: "1.12.16", notes: 'About page renamed to Misc and now has tab dividers<br>- New setting: decimal precision<br>- Added Whole Wheat (including White Whole Wheat) and Rice Flour to the Additional Ingredients list<br>- Fixed duplicating FAQ bug.'},
    { version: "1.14.18", notes: 'Sorted Additional Ingredients alphabetically<br>- Theme button moved to settings, but can be visible again through the settings tab<br>- Split water and flour in the app<br>- URL Queries (app and web) now include split flour and water values<br>- Pan diagram ported to app and sized up<br>- Bug fixes'},
    { version: "1.14.19-1.14.24", notes: 'Bug fixes'},
    { version: "1.14.24", notes: `Fixed water/flour swapping bug.<br>- If any of your recipes experienced a water/flour swap during the time this bug was happening, you can scroll down to Split Flour and Split Water sections. If you don't split values, you can hit the respective reset buttons, otherwise you'll need to manually switch the values and names.`},
    { version: "1.14.25", notes: `Fixed water/flour swapping bug.<br>- If any of your recipes experienced a water/flour swap during the time this bug was happening, you can scroll down to Split Flour and Split Water sections. If you don't split values, you can hit the respective reset buttons, otherwise you'll need to manually switch the values and names.`},
    { version: "2.0.0-2.0.1, and all release candidates", notes: `Major app rewrite for future proofing, performance, and groundwork for future enhancements. <br>- Partial redesign for convenience and design continuity <br>- Redesigned notes editor<br>- Redesigned additional ingredients picker<br>- Redesigned tips dropdowns<br>- Redesigned recipe instructions selector <br>- Updated some pictures for quality <br>- Upgrade to latest version of Ionic, Angular, and Typescript <br>- Migrated to Capacitor <br>- Added a warning for when using volumetric measurements<br>- Added clarification for "drops" measurement type<br>- Enhancements to the timer<br>- Added brand new Recipes picker<br>- Added default recipes<br>- Added "Simple Mode"<br>- Ported Nutrition Facts from the webapp, provided by Anders (thank you!)<br>- Pizza time<br>- Added onboarding screen for first time users<br>- Made sharable links and JSON much smaller<br>- Added a "please review" modal, once after two weeks<br>- Fixed bug where salt could not be 0<br>- Fixed timer formatting<br>- Created system to migrate recipes from the old version to the new one.<br>- Fix residue compensation not working (thanks Kyle for discovering this!)`},    
    { version: "2.0.2", notes: `Fix bug where nutrition values didn't include preferment. <br>- Fix rare bug where table width was short.<br>- Made app smaller in size`},    
    { version: "2.0.5", notes: `Fix timer automatically opening when the app does.<br>- Fix validation error when selecting "no prefermentation"<br>- Fix issue where creating a recipe link would sometimes link the previous recipe instead<br>- Add disclaimer regarding the timer functionality `},    
    { version: "2.0.8", notes: `Change how notification permissions are handled<br>- Small bug fixes`},    
    { version: "2.0.10", notes: `Fixed issue where a saved recipe may not properly open<br>- Corrected spelling errors and text spacing<br>- Misc other fixes`},   
    { version: "2.01.00", notes: `Feature parity between versions. Go here to App Info -> "See all apps" to learn why.<br>- Remove timer functionality. It was unreliable and had too many limitations.`}
  ]

  shortHistory = this.history.slice().reverse();

  constructor() { }

  ngOnInit(): void {
    this.shortHistory = this.shortHistory.slice(0, 3).reverse();
  }

}
