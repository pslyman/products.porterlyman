import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opentrackfitchangelog',
  templateUrl: './opentrackfitchangelog.component.html',
  styleUrls: ['./opentrackfitchangelog.component.scss'],
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
export class OpenTrackFitChangelogComponent implements OnInit {

  constructor() { }

  history = [
    {version: "1.0.0", notes: "Initial release"},
    {version: "1.0.1", notes: "Fixes to edit overlay, notes not updating, and editing not working"},
    {version: "1.0.2", notes: "UI fixes"},
    {version: "1.1.2", notes: "Added cloud save (auto backup, data returns on restoring to new phone)"},
    {version: "1.1.3", notes: "Fixed API-key issue"},
    {version: "1.1.4", notes: "Vibrate and notification on timer end <br/>- Custom timer ring-a-ding"},
    {version: "1.1.5", notes: "Notification fix <br/>- Rename cause it was used"},
    {version: "1.1.6", notes: "Fixed splash screen"},
    {version: "1.1.7", notes: "Fixed timer calculation bug"},
    {version: "1.1.8", notes: "Apparently non metric measurements weren't working, but now it's all working fine, thanks"},
    {version: "1.1.9", notes: "Changes to animation to make them flow a little better <br/>- Fixed issue where + - button visibility was tied to reps instead of sets"},
    {version: "1.1.11", notes: "Notification scheduled with OS so they'll notify you even if the app goes to sleep or is killed<br/>- More animation cleanup"},
    {version: "1.1.12", notes: "New chime<br/>- Add New modal closes after adding, in order to provide more intuitive experience"},
    {version: "1.1.13", notes: "Fixed issue with workout list not saving on increment/de-increments, and timer finishing a task.<br/>- Fixed flashing when defaulting to dark mode."},
    {version: "1.1.14", notes: "The actual fix for screen flashing<br/>- Fixed cloudSettings aggregation/duplicating issue"},
]

  ngOnInit(): void {
  }

}
