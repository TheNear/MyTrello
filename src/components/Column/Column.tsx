import React from "react";
import { useAppState } from "../../state/AppState/AppState";
import { addTask } from "../../state/AppState/AppStateActions";
import { Task } from "../../state/AppState/AppStateTypes";
import { AddNewItem } from "../AddNewItem/AddNewItem";
import { Card } from "../Card/Card";
import { ColumnContainer, ColumnTitle } from "./ColumnStyle";

interface ColumnProps {
  text: string;
  uid: string;
  cards: Task[];
}

const Column: React.FC<ColumnProps> = ({ text, cards, uid }) => {
  const { dispatch } = useAppState();

  const addCard = (text: string) => {
    dispatch(addTask(text, uid));
  };

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {cards.map((task) => (
        <Card key={task.id} text={task.text}/>
      ))}
      <AddNewItem toggleButtonText="+ Add another task" onAdd={addCard} dark />
    </ColumnContainer>
  );
};

export { Column };
