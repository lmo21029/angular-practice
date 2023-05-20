import { Injectable } from '@angular/core';

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
