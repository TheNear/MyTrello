import React from "react";
import { AddNewItem } from "./components/AddNewItem/AddNewItem";
import { Card } from "./components/Card/Card";
import { Column } from "./components/Column/Column";
import { useAppState } from "./state/AppState/AppState";
import { AppContainer } from "./styles/AppStyle";


const App: React.FC = () => {
  const { state } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list) => (
        <Column key={list.id} text={list.text} index={list.id}/>
      ))}
      <AddNewItem onAdd={console.log} toggleButtonText="+ Add another list" />
    </AppContainer>
  );
};

export { App };
