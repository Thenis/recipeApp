import { Subject } from 'rxjs/Subject';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService) {}

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

    getRecipeById(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());   
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}