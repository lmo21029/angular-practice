import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/store/task.interface';

@Component({
  selector: 'task-list-items',
  templateUrl: './task-list-items.component.html',
  styleUrls: ['./task-list-items.component.scss'],
})
export class TaskListItemsComponent {
  @Input() item?: Item;
  @Output() removeItemList = new EventEmitter<Item>();

  removeItem(itemId: Item | undefined) {
    this.removeItemList.emit(itemId);
  }
}
