import { Injectable } from '@angular/core';

//injectable are the decorator to implement services in angular
@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  constructor() {}

  getListItems() {
    return [
      { itemName: 'some name', id: 1 },
      { itemName: 'some name', id: 2 },
      { itemName: 'some name', id: 3 },
    ];
  }
}
