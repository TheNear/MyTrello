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

  const openForm = () => {
    setShowForm(true);
  };


  if (showForm) {
    return (
      <NewItemForm
      // Поменять это поведение с передачей функции 
        onAdd={(text: string) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={openForm}>
      {toggleButtonText}
    </AddItemButton>
  );
};

export { AddNewItem };
