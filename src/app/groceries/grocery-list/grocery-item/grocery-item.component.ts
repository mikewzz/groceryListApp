import { Component, OnInit, Input } from '@angular/core';
import { Grocery } from '../../grocery.model';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent implements OnInit {
  @Input() grocery: Grocery;
  @Input() index: number;

  ngOnInit() {
  }

  //function to change color of items that have been purchased
  getStyle() {
    if (this.grocery.purchased){
      return "2px solid lightgreen";
    } else {
      return "";
    }
  }
}
