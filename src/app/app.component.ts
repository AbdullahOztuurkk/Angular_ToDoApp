import { Component } from '@angular/core';
import {TodoItemModel, TodoModel} from './Models/TodoModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new TodoModel();
  isDisplay = false;

  getName()
  {
    return this.model.user;
  }

  getItems()
  {
    if( this.isDisplay ){
      return this.model.items;
    }
    return this.model.items.filter(item => !item.status);
  }

  AddItems(value)
  {
    if(value != '')
    {
      this.model.items.push(new TodoItemModel(value, false));
    }
  }
}
