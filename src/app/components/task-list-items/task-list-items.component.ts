import { Component, Input, Output, EventEmitter } from '@angular/core';

interface item {
  id: number;
  itemName: string;
}

@Component({
  selector: 'task-list-items',
  templateUrl: './task-list-items.component.html',
  styleUrls: ['./task-list-items.component.scss'],
})
export class TaskListItemsComponent {
  @Input() item?: item;
  @Output() removeItemList = new EventEmitter<item>();

  removeItem(itemId: item | undefined) {
    this.removeItemList.emit(itemId);
  }
}
