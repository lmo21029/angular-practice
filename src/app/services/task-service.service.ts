import { Injectable } from '@angular/core';
import { Item } from 'src/store/task.interface';
import { addTask, deleteTask } from 'src/store/task.actions';
import { Store } from '@ngrx/store';

//injectable are the decorator to implement services in angular
@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  constructor(private store: Store) {}

  itemList: Array<any> = [];

  getListItems() {
    return this.itemList;
  }

  addItemList(item: any) {
    const task: Item = {
      id: Number(this.itemList.length + 1),
      itemName: item.taskName,
    };

    this.store.dispatch(addTask({ task }));
    // this.itemList.push(taskItem);
  }

  removeItem(task: Item) {
    this.store.dispatch(deleteTask({ task }));

    // const index = this.itemList.findIndex(
    //   (item) => item.id === itemToRemove.id
    // );
    // this.itemList.splice(index, 1);
  }
}
