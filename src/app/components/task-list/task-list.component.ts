import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  //provider are one of the concepts to inyection of dependencies of service
  providers: [TaskServiceService],
})
export class TaskListComponent implements OnInit {
  constructor(private listService: TaskServiceService) {}
  listItems: any[] = [];

  ngOnInit(): void {
    this.listItems = this.listService.getListItems();
  }
}
