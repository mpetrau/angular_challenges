import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  private  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10)
  ];

  changedIngredients = new EventEmitter<Ingredient[]>();

  constructor() { }

  getIngredients = () => this.ingredients.slice();

  addIngredient(ingredient:Ingredient) {
    this.ingredients.push(ingredient);
    console.log(ingredient.name + ' ingredient added: '  + ingredient.amount)
    this.changedIngredients.emit(this.getIngredients());
  }

}
