import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shoppingList.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddIngredient(form: NgForm) {
    const { value } = form;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
