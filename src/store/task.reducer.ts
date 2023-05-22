import { createReducer, on } from '@ngrx/store';
import * as TaskActions from './task.actions';
import { TaskState } from './task.state';

export const initialState: TaskState = {
  tasks: [],
};

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.addTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
  })),
  on(TaskActions.deleteTask, (state, { task }) => ({
    ...state,
    tasks: state.tasks.splice(
      state.tasks.findIndex((item) => item.id === task.id),
      1
    ),
  }))
);
