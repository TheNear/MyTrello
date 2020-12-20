import { InferValueTypes } from "../../types/state";
import * as actions from "./AppStateActions";

export type ColumnDragItem = {
  uid: string,
  type: "COLUMN",
  text: string,
  cards: Task[],
}

export type CardDragItem = {
  uid: string,
  type: "CARD",
  text: string,
  listID: string,
}

export type DragItem = ColumnDragItem | CardDragItem;

export interface Task {
  listID: string,
  id: string,
  text: string,
}

export interface List {
  id: string,
  text: string,
  tasks: Task[],
}

export interface AppState {
  lists: List[],
}

export interface MoveListStatus {
  dragID: string,
  hoverID: string,
}

export interface MoveTaskStatus {
  dragID: string,
  hoverID: string | 0,
  sourceColumn: string,
  targterColumn: string,
}

export interface AppStateContextProps {
  state: AppState,
  dispatch: React.Dispatch<AppActions>,
}

export enum AppActionsTypes {
  ADD_LIST = "app/ADD_LIST",
  ADD_TASK = "app/ADD_TASK",
  MOVE_LIST = "app/MOVE_LIST",
  MOVE_TASK = "app/MOVE_TASK",
}

export type AppActions = ReturnType<InferValueTypes<typeof actions>>