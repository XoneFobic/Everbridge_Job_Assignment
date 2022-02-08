import { Injectable }    from '@angular/core';

import { GroceriesItem } from '../interfaces/groceries-item';
import { StorageService } from './storage.service';

const storageKey = 'Groceries_List';

@Injectable({ providedIn: 'root' })
export class GroceriesItemService {
  private readonly groceriesList: GroceriesItem[];

  public constructor(private storageService: StorageService) {
    this.groceriesList = storageService.getData(storageKey) || [ { itemName: 'undefined' } ];
  }

  public getGroceriesList(): GroceriesItem[] {
    return this.groceriesList;
  }

  public addItem(itemName: string): void {
    this.groceriesList.push({ itemName });

    this.saveList();
  }

  public updateItem(item: GroceriesItem, changes: any): void {
    this.groceriesList[this.groceriesList.indexOf(item)] = { ...item, ...changes };

    this.saveList();
  }

  public deleteItem(item: GroceriesItem) {
    this.groceriesList.splice(this.groceriesList.indexOf(item), 1);

    this.saveList();
  }

  private saveList(): void {
    this.storageService.setData(storageKey, this.groceriesList);
  }
}
