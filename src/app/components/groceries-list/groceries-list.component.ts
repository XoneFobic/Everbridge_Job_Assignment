import { Component, OnInit } from '@angular/core';

import { GroceriesItem }        from '../../interfaces/groceries-item';
import { GroceriesItemService } from '../../services/groceries-item.service';

@Component({
  selector: 'rd-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: [ './groceries-list.component.scss' ]
})
export class GroceriesListComponent implements OnInit {
  public groceriesList: GroceriesItem[] = [];

  public constructor(private groceriesItemService: GroceriesItemService) {
  }

  public ngOnInit(): void {
    this.groceriesList = this.groceriesItemService.getGroceriesList();
  }

  public addItem(itemName: string): void {
    this.groceriesItemService.addItem(itemName);
  }

  public removeItem(item: GroceriesItem): void {
    this.groceriesItemService.deleteItem(item);
  }

  public updateItem(item: GroceriesItem, changes: any) {
    this.groceriesItemService.updateItem(item, changes);
  }
}
