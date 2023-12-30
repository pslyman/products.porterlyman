import { Component, OnInit } from '@angular/core';
import { miscRecipes } from '../constants';

@Component({
  selector: 'app-dough-recipes',
  templateUrl: './dough-recipes.component.html',
  styleUrls: ['./dough-recipes.component.scss']
})
export class DoughRecipesComponent implements OnInit {

  constructor() { }

  recipes = miscRecipes;

  ngOnInit(): void {
  }

}
