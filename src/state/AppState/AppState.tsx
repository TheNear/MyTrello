import { AppStateContextProps } from "./AppStateTypes";
import React, { createContext, useReducer, useContext } from "react";
import { appData } from "./AppStateData";
import { appStateReducer } from "./AppStateReducer";

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);

  return <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>;
};

export const useAppState = (): AppStateContextProps => useContext(AppStateContext);
