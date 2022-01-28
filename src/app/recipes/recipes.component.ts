import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { recipeservice } from './recipe.service';
import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

recipe:Recipe[]=[] 
  sd=false;
  selectedre!:Recipe
constructor(private  recipservice:recipeservice) { }
@ViewChild('sl') slist:ElementRef | undefined

 
ngOnInit(): void {
 
}

getrecipe()
{
  this.recipe=(this.recipservice.getrecipe())
  
}

onSelect(rec: Recipe) {
  this.selectedre =rec;
}
}


