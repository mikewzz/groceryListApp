import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-grocery-edit',
  templateUrl: './grocery-edit.component.html',
  styleUrls: ['./grocery-edit.component.css']
})
export class GroceryEditComponent implements OnInit {
  id: number;
  editMode = false;
  groceryForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private groceryService: GroceryService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id= +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

//will call appropriate function depending if the onSubmit is called in 'editmode' or not
//reactive form allows passing of form's "value" into the updateGrocery function without having to initialize new Grocery object
  onSubmit() {
    if (this.editMode) {
      this.groceryService.updateGrocery(this.id, this.groceryForm.value);
    } else {
      this.groceryService.addGrocery(this.groceryForm.value);
    }
    this.onCancel();
  }

  //when cancelling navgiate to previous page directory
  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  //form initialization and also validation implemented for the name input
  private initForm() {
    let groceryName = '';
    let groceryDescription = '';
    let groceryStatus = false;

    if (this.editMode) {
      const grocery = this.groceryService.getGrocery(this.id);
      groceryName = grocery.name;
      groceryDescription = grocery.description;
      groceryStatus = grocery.purchased;
    }
    this.groceryForm = new FormGroup({
      'name': new FormControl(groceryName, Validators.required),
      'description': new FormControl(groceryDescription),
      'purchased': new FormControl(groceryStatus)
    });
  }
}
