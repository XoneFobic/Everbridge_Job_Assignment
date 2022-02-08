import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }       from '@angular/platform-browser';

import { AppComponent }           from './app.component';
import { AddItemInputComponent }  from './components/add-item-input/add-item-input.component';
import { GroceriesItemComponent } from './components/groceries-item/groceries-item.component';
import { GroceriesListComponent } from './components/groceries-list/groceries-list.component';
import { GroceriesItemService }   from './services/groceries-item.service';
import { StorageService }         from './services/storage.service';

@NgModule({
  declarations: [ AppComponent, GroceriesItemComponent, AddItemInputComponent, GroceriesListComponent ],
  imports: [ BrowserModule, ReactiveFormsModule ],
  providers: [ GroceriesItemService, StorageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
