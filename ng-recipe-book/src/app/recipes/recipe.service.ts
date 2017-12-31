import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] =
    [
      new Recipe("A test reciple", "this is simple a test", "http://cdn-image.myrecipes.com/sites/default/files/styles/420x420/public/image/recipes/sl/03142008/chicken-salad-sl-521176-x.jpg?itok=m1m0du1o"),
      new Recipe("Another test", "this is simple a test", "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ay/14/08/coffee-rubbed-skirt-steak-ay-x.jpg?itok=a8Fr6wvA")
    ];

  selectRecipe = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes = () => this.recipes.slice();

}
