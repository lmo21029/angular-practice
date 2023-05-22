import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Item } from 'src/store/task.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'task-list-form',
  templateUrl: './task-list-form.component.html',
  styleUrls: ['./task-list-form.component.scss'],
})
export class TaskListFormComponent {
  @ViewChild('form') taskForm!: NgForm;
  @Output() taskItem = new EventEmitter<Item>();

  onSubmit() {
    this.taskItem.emit(this.taskForm.value);
    this.taskForm.reset();
  }
}
