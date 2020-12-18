import { AppStateContextProps } from "./AppStateTypes";
import React, { createContext, useReducer, useContext } from "react";
import { appData } from "./AppStateData";

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider: React.FC = ({ children }) => {
  return <AppStateContext.Provider value={{ state: appData }}>{children}</AppStateContext.Provider>;
};

export const useAppState = (): AppStateContextProps => useContext(AppStateContext);
