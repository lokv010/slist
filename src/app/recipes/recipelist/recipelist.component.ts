import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeservice } from '../recipe.service';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

@ViewChild('gr') grec: Recipe[]=[];
  
 recipelist:Recipe[]=[];
  
  constructor(private list:recipeservice
  ) { }

  ngOnInit():void {
    
  this.recipelist=this.list.recipes;
  
  }


selectrecipe()
{

}

}
