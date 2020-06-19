export class TodoModel{
  user;
  items;
  constructor() {
    this.user = 'Abdullah Öztürk';
    this.items = [
        new TodoItemModel('Have Breakfast' , false),
        new TodoItemModel('Study lessons' , false),
        new TodoItemModel('Read books' , true),
        new TodoItemModel('Play Video Games' , true)
    ];
  }
}
export class TodoItemModel {
  description;
  status;

  constructor(desc, ItemStatus) {
    this.description = desc;
    this.status = ItemStatus;
  }

}
