import React from "react";
import { AddNewItem } from "../AddNewItem/AddNewItem";
import { ColumnContainer, ColumnTitle } from "./ColumnStyle";

interface ColumnProps {
  text: string;
}

const Column: React.FC<ColumnProps> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem toggleButtonText="+ Add another task" onAdd={console.log} dark />
    </ColumnContainer>
  );
};

export { Column };
