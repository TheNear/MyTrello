import React from "react";
import { useAppState } from "../../state/AppState/AppState";
import { AddNewItem } from "../AddNewItem/AddNewItem";
import { Card } from "../Card/Card";
import { ColumnContainer, ColumnTitle } from "./ColumnStyle";

interface ColumnProps {
  text: string;
  index: number,
}

const Column: React.FC<ColumnProps> = ({ text, index }) => {
  const { state } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists.find((list) => list.id === index)?.tasks.map((task) => (
        <Card key={task.id} text={task.text}/>
      ))}
      <AddNewItem toggleButtonText="+ Add another task" onAdd={console.log} dark />
    </ColumnContainer>
  );
};

export { Column };
