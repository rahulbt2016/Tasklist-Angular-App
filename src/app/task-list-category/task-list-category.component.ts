import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list-category',
  templateUrl: './task-list-category.component.html',
  styleUrls: ['./task-list-category.component.css']
})
export class TaskListCategoryComponent {

  @Input() taskCategory: {
    title: string,
    tasks: string[],
    id: string
  } = {
    title: '',
    tasks: [],
    id: ''
  };

  @Input() filter: string = '';

  @Output() deleteTask = new EventEmitter<number>();

  onDeleteTask(taskIndex: number) {
    this.deleteTask.emit(taskIndex);
  }
}
