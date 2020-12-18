import { AppActionsTypes, Task } from "./AppStateTypes";

export const addTask = (task: Task) => ({
  type: AppActionsTypes.ADD_TASK,
  payload: task,
} as const);

export const addList = (title: string) => ({
  type: AppActionsTypes.ADD_LIST,
  payload: title,
} as const);