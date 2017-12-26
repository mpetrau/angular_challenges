import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =
    [
      new Recipe("A test reciple", "this is simple a test", "http://cdn-image.myrecipes.com/sites/default/files/styles/420x420/public/image/recipes/sl/03142008/chicken-salad-sl-521176-x.jpg?itok=m1m0du1o")
    ];

  constructor() { }

  ngOnInit() {
  }

}
