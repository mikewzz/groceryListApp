import { Subject } from 'rxjs/Subject';
import { Grocery } from './grocery.model';

export class GroceryService {
  //creating an event to pass an array of grocery as a value
  //so when passing copies of the grocery array we will see changes/updates reflected
    groceriesChanged = new Subject<Grocery[]>();
    private groceries: Grocery[] =[
    new Grocery('Eggs', 'Need to get 3 cartons of eggs for daughter\'s school baking project. *****This is a hard coded item onto the grocery list.', false),
    new Grocery('Chocolate Milk', '', false),
    new Grocery('Tin Foil', 'Needed for BBQ this weekend!!! *****This is a hard coded item onto the grocery list.', false)
  ];

//this sets the grocery list with the data we get from the database
  setGroceries(groceries: Grocery[]) {
    this.groceries = groceries;
    this.groceriesChanged.next(this.groceries.slice());
  }

//using slice to get a copy
  getGroceries() {
    return this.groceries.slice();
  }
//using slice to get a copy at index number
  getGrocery(index:number){
    return this.groceries.slice()[index];
  }

//add grocery item that is passed into this function
  addGrocery(grocery: Grocery) {
    this.groceries.push(grocery);
    this.groceriesChanged.next(this.groceries.slice());
  }

  //to update grocery at current index with the new grocery
  updateGrocery(index: number, newGrocery: Grocery) {
    this.groceries[index] = newGrocery;
    this.groceriesChanged.next(this.groceries.slice());
  }

//service to delete using splice the grocery item at the current index
  deleteGroItem(index: number) {
    this.groceries.splice(index, 1);
    this.groceriesChanged.next(this.groceries.slice());
  }
}
