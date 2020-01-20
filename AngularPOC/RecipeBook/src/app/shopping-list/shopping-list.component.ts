import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {
  ingredents :Ingredient[]=[
    new Ingredient('Apple',100),
    new Ingredient('Tomatos',100)
  ];
  constructor() { }

  ngOnInit() {
  }

}
