import { ShoppingListService } from '../shoppingList.service';
import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(e) {
    e.preventDefault();
    const ingredient = new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value)
    this.shoppingListService.addIngredient(ingredient);
  }

}
