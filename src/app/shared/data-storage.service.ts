//put this service in the shared folder for possible integration of other features in the future
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { GroceryService } from '../groceries/grocery.service';
import { Grocery } from '../groceries/grocery.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private groceryService: GroceryService) {}

//using injected groceryService and use put(Put overwrites old data on the database) to store groceries on to the database
  storeGrocery() {
    return this.http.put('https://ng-grocery-tool-precima.firebaseio.com/grocery.json', this.groceryService.getGroceries());
  }

//transformed into js array with json() which can then be assigned to the grocery array and sent to the service
//service then uses setgroceries function to set the list of groceries that we have based on the data in the backend
  getGrocery() {
    this.http.get('https://ng-grocery-tool-precima.firebaseio.com/grocery.json')
      .subscribe(
        (response: Response) => {
          const grocery: Grocery[] = response.json();
          this.groceryService.setGroceries(grocery);
        }
      );
  }
}
