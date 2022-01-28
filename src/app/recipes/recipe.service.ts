import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";


@Injectable({
  providedIn: 'root',
})
export class recipeservice {
  static getrecipe() {
    throw new Error('Method not implemented.');
  }
      public recipes: Recipe[]= [
        new Recipe("pizza", "bourbonpizza","https://images.squarespace-cdn.com/content/v1/5c5643ccd745629395a946b8/1549669682253-4JLY8OGLT8BLSMCM57S2/_DSC7639.jpg?format=1000w"),
        new Recipe("idly", "gheeidly","https://t3.ftcdn.net/jpg/02/80/60/38/360_F_280603885_lNE7hum2LXFJwhYQYkmKLNDID4C5VrW7.jpg")

    ];



 getrecipe()
{
  return this.recipes.slice();
}

addrecipe(arecipe:Recipe)
{
  return this.recipes.push(arecipe)

}
}



