import { InferValueTypes } from "../../types/state";
import * as actions from "./AppStateActions";

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

export interface MoveStatus {
  dragID: string,
  hoverID: string,
}

export interface AppStateContextProps {
  state: AppState,
  dispatch: React.Dispatch<AppActions>,
}

export enum AppActionsTypes {
  ADD_LIST = "app/ADD_LIST",
  ADD_TASK = "app/ADD_TASK",
  MOVE_LIST = "app/MOVE_LIST",
}

export type AppActions = ReturnType<InferValueTypes<typeof actions>>