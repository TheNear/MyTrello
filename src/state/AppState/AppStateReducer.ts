import { AppActions, AppActionsTypes, AppState } from "./AppStateTypes";

const initialState: AppState = {
  lists: [],
};

export const appStateReducer = (state = initialState, action: AppActions): AppState => {
  switch (action.type) {
    case AppActionsTypes.ADD_LIST:
      return state;
    case AppActionsTypes.ADD_TASK:
      return state;
    default:
      return state;
  }
};
