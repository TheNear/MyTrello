import { InferValueTypes } from "../../types/state";
import * as actions from "./AppStateActions";

export interface Task {
  id: string,
  text: string,
}

export interface List {
  id: number,
  text: string,
  tasks: Task[],
}

export interface AppState {
  lists: List[],
}

export interface AppStateContextProps {
  state: AppState,
}

export enum AppActionsTypes {
  ADD_LIST = "app/ADD_LIST",
  ADD_TASK = "app/ADD_TASK",
}

export type AppActions = ReturnType<InferValueTypes<typeof actions>>