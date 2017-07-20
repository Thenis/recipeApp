import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://i.imgur.com/HHIkMBf.jpg'),
        new Recipe('Another Test Recipe', 'This is a test again', 'https://i.imgur.com/HHIkMBf.jpg')
    ];

    get getRecipes() {
       return this.recipes.slice();
    }
}