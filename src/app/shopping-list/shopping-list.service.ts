import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingridientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    {
      name: 'Apples',
      amount: 5,
    },
    {
      name: 'Tomatoes',
      amount: 10,
    },
  ];

  constructor() {}

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
  }

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }
}
