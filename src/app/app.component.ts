import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { recipeservice } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[recipeservice]
})
export class AppComponent {
  title = 'slist';
}
