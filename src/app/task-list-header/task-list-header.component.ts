import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.css']
})
export class TaskListHeaderComponent {
  @Input() totalTasks: number = 0;
}
