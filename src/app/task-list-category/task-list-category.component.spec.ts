import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListCategoryComponent } from './task-list-category.component';

describe('TaskListCategoryComponent', () => {
  let component: TaskListCategoryComponent;
  let fixture: ComponentFixture<TaskListCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
