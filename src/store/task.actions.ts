import { createAction, props } from '@ngrx/store';
import { Item } from './task.interface';

export const addTask = createAction('[Task] Add Task', props<{ task: any }>());

export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ task: any }>()
);
