import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [TaskServiceService],
})
export class TaskListComponent implements OnInit {
  constructor(private listService: TaskServiceService) {}
  listItems: any[] = [];
  ngOnInit(): void {
    this.listItems = this.listService.getListItems();
  }
}
