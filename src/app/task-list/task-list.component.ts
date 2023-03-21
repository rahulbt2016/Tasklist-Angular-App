import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  
  tasklist = [
    {   
      title: 'Humber', 
      tasks: ['Task 1', 'Task 2', 'Task 3'],
      id: '1',
    },
    {
      title: 'MERN', 
      tasks: ['Lab', 'Project', 'Quiz'],
      id: '2', 
    },
    {
    title: 'Java',
    tasks: ['Group Discussion', 'Exam', 'Assignment'],
    id: '3',
    },
  ]

  filter = '';

  getTotalTasks() {
    let totalTasks = 0;

    this.tasklist.map((tasklistCategory) => (
      totalTasks += tasklistCategory.tasks.length
    ))

    return totalTasks;
  }

  deleteTask(tasklistId: string, taskIndex: number) {
    
    this.tasklist = this.tasklist.map((tasklistCategory) => (
      tasklistCategory.id === tasklistId ? 
        {...tasklistCategory, tasks: tasklistCategory.tasks.filter((task, index) => index !== taskIndex)} 
      : tasklistCategory
    ))

    // check if the task category is empty, and remove it if it is
    const tasklistIndex = this.tasklist.findIndex((tasklistCategory) => tasklistCategory.id === tasklistId);
    if (this.tasklist[tasklistIndex].tasks.length === 0) {
      this.tasklist.splice(tasklistIndex, 1);
    }

  }

  setFilter(filter: string) {
    this.filter = filter;
  }
}
