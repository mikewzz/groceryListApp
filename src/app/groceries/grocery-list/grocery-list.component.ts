import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Grocery } from '../grocery.model';
import { GroceryService }  from '../grocery.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit, OnDestroy {
  groceries: Grocery[];
  subscription: Subscription;

  constructor(private groceryService: GroceryService, private router: Router, private route: ActivatedRoute) { }

//this will listen to groceries changed event; new array of groceries 
  ngOnInit() {
    this.subscription = this.groceryService.groceriesChanged.subscribe(
      (groceries:Grocery[]) => {
        this.groceries = groceries;
      }
    )
    this.groceries = this.groceryService.getGroceries();
  }

  //when new item is clicked, navigate to new form
  onNewItem(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

//prevent memory leak
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
