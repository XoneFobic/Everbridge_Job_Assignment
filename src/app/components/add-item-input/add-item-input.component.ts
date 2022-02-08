import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl }                     from '@angular/forms';

@Component({
  selector: 'rd-add-item-input',
  templateUrl: './add-item-input.component.html',
  styleUrls: [ './add-item-input.component.scss' ]
})
export class AddItemInputComponent {
  @Output() public submit: EventEmitter<string> = new EventEmitter<string>();

  public itemName: FormControl = new FormControl('');

  public submitValue(itemName: string): void {
    if (itemName) {
      this.itemName.reset();
      this.submit.emit(itemName);
    }
  }
}
