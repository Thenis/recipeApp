import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Steak', 'A juicy steake', 'https://i.imgur.com/haa1dru.jpg', [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Burger', 'A big fat burger', 'https://i.imgur.com/kpu7hRD.jpg', [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    get getRecipes() {
       return this.recipes.slice();
    }
}