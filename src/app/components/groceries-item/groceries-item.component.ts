import { Component, EventEmitter, Input, Output } from '@angular/core';

import { GroceriesItem } from '../../interfaces/groceries-item';

@Component({
  selector: 'rd-groceries-item',
  templateUrl: './groceries-item.component.html',
  styleUrls: [ './groceries-item.component.scss' ]
})
export class GroceriesItemComponent {
  @Input() public item: GroceriesItem = { itemName: 'undefined' };
  @Output() public remove: EventEmitter<GroceriesItem> = new EventEmitter<GroceriesItem>();
  @Output() public update: EventEmitter<any> = new EventEmitter<any>();

  public removeItem(): void {
    this.remove.emit(this.item);
  }

  public completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { inBasket: !this.item.inBasket }
    });
  }

  public updateItem(newValue: string): void {
    this.update.emit({
      item: this.item,
      changes: { itemName: newValue }
    });
  }
}
