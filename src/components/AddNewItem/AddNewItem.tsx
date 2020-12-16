import React, { useState } from "react";
import { AddItemButton } from "./AddNewItemStyle";
import { NewItemForm } from "../NewItemForm/NewItemForm";

interface AddNewItemProps {
  onAdd(text: string): void,
  toggleButtonText: string,
  dark?: boolean,
}

const AddNewItem: React.FC<AddNewItemProps> = ({ onAdd, toggleButtonText, dark }) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <NewItemForm 
        onAdd={(text: string) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};

export { AddNewItem };
