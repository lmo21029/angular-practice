import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListFormComponent } from './components/task-list-form/task-list-form.component';
import { TaskListItemsComponent } from './components/task-list-items/task-list-items.component';

import { taskReducer } from 'src/store/task.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TaskListComponent,
    TaskListFormComponent,
    TaskListItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      tasks: taskReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
