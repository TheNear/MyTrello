import { AppActionsTypes, MoveListStatus, MoveTaskStatus } from "./AppStateTypes";

export const addTask = (text: string, listID: string) => ({
  type: AppActionsTypes.ADD_TASK,
  payload: { text, listID },
} as const);

export const addList = (title: string) => ({
  type: AppActionsTypes.ADD_LIST,
  payload: title,
} as const);

export const moveList = (move: MoveListStatus) => ({
  type: AppActionsTypes.MOVE_LIST,
  payload: move,
} as const);

export const moveTask = (move: MoveTaskStatus) => ({
  type: AppActionsTypes.MOVE_TASK,
  payload: move,
} as const);