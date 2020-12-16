import React from "react";
import { AddNewItem } from "./components/AddNewItem/AddNewItem";
import { Card } from "./components/Card/Card";
import { Column } from "./components/Column/Column";
import { AppContainer } from "./styles/AppStyle";

const App: React.FC = () => {
  return (
    <AppContainer>
      <Column text="Have to Do">
        <Card text="Buy Milk"/>
      </Column>
      <Column text="Completed">
        <Card text="Learn React"/>
      </Column>
      <Column text="In Progress">
        <Card text="Some..."/>
      </Column>
      <AddNewItem onAdd={console.log} toggleButtonText="+ Add another list" />
    </AppContainer>
  );
};

export { App };
