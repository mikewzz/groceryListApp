import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { GroceryDetailComponent } from './groceries/grocery-detail/grocery-detail.component';
import { GroceryListComponent } from './groceries/grocery-list/grocery-list.component';
import { GroceryItemComponent } from './groceries/grocery-list/grocery-item/grocery-item.component';
import { AppRoutingModule } from './app-routing.module';
import { GroceryStartComponent } from './groceries/grocery-start/grocery-start.component';
import { GroceryEditComponent } from './groceries/grocery-edit/grocery-edit.component';
import { GroceryService } from './groceries/grocery.service';
import { DataStorageService } from './shared/data-storage.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroceriesComponent,
    GroceryDetailComponent,
    GroceryListComponent,
    GroceryItemComponent,
    GroceryStartComponent,
    GroceryEditComponent,

],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GroceryService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
