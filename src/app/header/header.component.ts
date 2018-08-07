import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor (private dataStorageService: DataStorageService) {}

  //calling the storeGrocery function from dataStorageService to save data from the database
  onSaveData() {
    window.alert("Grocery List Saved.");
    this.dataStorageService.storeGrocery().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }
  //this is calling the getGrocery function from the datastorageService to get data from the database
  onFetchData() {
    this.dataStorageService.getGrocery();
  }
}
