import { Injectable } from '@angular/core';

interface item {
  id: number;
  itemName: string;
}

//injectable are the decorator to implement services in angular
@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  constructor() {}

  itemList: Array<any> = [];

  getListItems() {
    return this.itemList;
  }

  addItemList(item: any) {
    const taskItem = {
      itemName: item.taskName,
      id: this.itemList.length + 1,
    };
    this.itemList.push(taskItem);
  }

  removeItem(itemToRemove: item) {
    const index = this.itemList.findIndex(
      (item) => item.id === itemToRemove.id
    );
    this.itemList.splice(index, 1);
  }
}
