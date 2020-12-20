import React from "react";
import { AddNewItem } from "./components/AddNewItem/AddNewItem";
import { Column } from "./components/Column/Column";
import { CustomDragLayer } from "./components/CustomDragLayer/CustomDragLayer";
import { useAppState } from "./state/AppState/AppState";
import { addList } from "./state/AppState/AppStateActions";
import { AppContainer } from "./styles/AppStyle";

const App: React.FC = () => {
  const { state, dispatch } = useAppState();

  const addColumn = (title: string) => {
    dispatch(addList(title));
  };

  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list) => (
        <Column key={list.id} text={list.text} cards={list.tasks} uid={list.id} />
      ))}
      <AddNewItem onAdd={addColumn} toggleButtonText="+ Add another list" />
    </AppContainer>
  );
};

export { App };
