import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface item {
  id: number;
  itemName: string;
}

@Component({
  selector: 'task-list-form',
  templateUrl: './task-list-form.component.html',
  styleUrls: ['./task-list-form.component.scss'],
})
export class TaskListFormComponent {
  @ViewChild('form') taskForm!: NgForm;
  @Output() taskItem = new EventEmitter<item>();

  onSubmit() {
    this.taskItem.emit(this.taskForm.value);
    this.taskForm.reset();
  }
}
