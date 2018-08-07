import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Grocery } from '../grocery.model';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-grocery-detail',
  templateUrl: './grocery-detail.component.html',
  styleUrls: ['./grocery-detail.component.css']
})
export class GroceryDetailComponent implements OnInit {
  grocery: Grocery;
  id: number;

  constructor(private groceryService: GroceryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.grocery = this.groceryService.getGrocery(this.id);
      }
    );
  }

//navigation on edit to 'edit'
  onEditItem() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

//this does a window confirmation of deletion of grocery item and also navigates away back to the main area of the app
  onDeleteItem() {
    if(window.confirm('Are you sure you want to delete this item?')){
        this.groceryService.deleteGroItem(this.id);
        this.router.navigate(['/groceries']);
    }
  }

//when mark as purchase is pressed this sets the purchased attribute of the grocery model to whatever it wasn't before to toggle between purchased or unpurchased
  onMarkPurchase() {
    this.grocery.purchased=!this.grocery.purchased;
  }

}
