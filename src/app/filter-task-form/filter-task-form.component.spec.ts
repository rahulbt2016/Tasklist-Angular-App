import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTaskFormComponent } from './filter-task-form.component';

describe('FilterTaskFormComponent', () => {
  let component: FilterTaskFormComponent;
  let fixture: ComponentFixture<FilterTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTaskFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
