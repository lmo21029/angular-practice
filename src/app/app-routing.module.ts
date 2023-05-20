import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskListComponent } from './components/task-list/task-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

//define routes to use
const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
  },
  {
    path: 'ListItems',
    component: TaskListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
//export route class to import in the app module
export class AppRoutingModule {}
