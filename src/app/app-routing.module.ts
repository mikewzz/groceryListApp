import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroceriesComponent } from './groceries/groceries.component';
import { GroceryStartComponent } from './groceries/grocery-start/grocery-start.component';
import { GroceryDetailComponent } from './groceries/grocery-detail/grocery-detail.component';
import { GroceryEditComponent } from './groceries/grocery-edit/grocery-edit.component';

//the empty path will redirect to groceries 'homepage'
//uses child routing to redirect to the appropriate components
const appRoutes: Routes = [
  { path: '', redirectTo: '/groceries', pathMatch: 'full'},
  { path: 'groceries', component: GroceriesComponent, children : [
    {path: '', component: GroceryStartComponent},
    {path: 'new', component: GroceryEditComponent },
    {path: ':id', component: GroceryDetailComponent },
    {path: ':id/edit', component: GroceryEditComponent }
  ] }

];

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
