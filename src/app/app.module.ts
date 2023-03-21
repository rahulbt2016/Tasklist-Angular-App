import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListHeaderComponent } from './task-list-header/task-list-header.component';
import { TaskListCategoryComponent } from './task-list-category/task-list-category.component';
import { FilterTaskFormComponent } from './filter-task-form/filter-task-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskListHeaderComponent,
    TaskListCategoryComponent,
    FilterTaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
