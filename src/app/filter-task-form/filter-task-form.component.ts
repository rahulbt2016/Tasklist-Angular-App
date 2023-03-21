import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-task-form',
  templateUrl: './filter-task-form.component.html',
  styleUrls: ['./filter-task-form.component.css']
})
export class FilterTaskFormComponent {
  @Input() tasklist: {
    id: string,
    title: string,
    tasks: string[]
  }[] =  [];
  
  @Output() selectedOption = new EventEmitter<string>();
  @Input() filter: string = '';

  onSelect(event: Event) {

    const inputElement = event.target as HTMLInputElement;
    const option = inputElement.value;
    this.selectedOption.emit(option);
  }

}
