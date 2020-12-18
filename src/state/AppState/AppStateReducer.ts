import { v4 as uuid } from "uuid";
import { AppActions, AppActionsTypes, AppState } from "./AppStateTypes";

const initialState: AppState = {
  lists: [],
};

export const appStateReducer = (state = initialState, action: AppActions): AppState => {
  switch (action.type) {
    case AppActionsTypes.ADD_LIST:
      return {
        ...state,
        lists: state.lists.concat({ id: uuid(), text: action.payload, tasks: [] }),
      };
    case AppActionsTypes.ADD_TASK: {
      // TODO: Убрать в отдельную функцию мб? Сликшом толстая операция в редюсере?
      const template = {
        ...state,
        lists: state.lists.map((list) => {
          if (list.id === action.payload.listID) {
            return {
              ...list,
              tasks: [...list.tasks].concat({
                id: uuid(),
                listID: action.payload.listID,
                text: action.payload.text,
              }),
            };
          }
          return list;
        }),
      };
      return template;
    }
    case AppActionsTypes.MOVE_LIST:
      return state;
    default:
      return state;
  }
};
