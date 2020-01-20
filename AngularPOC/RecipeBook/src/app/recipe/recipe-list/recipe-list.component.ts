import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {


  recipes:Recipe[]=[
    new Recipe('A test R','A test Dec','/app/images/R1.jpg'),
    new Recipe('A test R','A test Dec','/app/images/R1.jpg')
 ];

  constructor() { }

  ngOnInit() {
  }

}
