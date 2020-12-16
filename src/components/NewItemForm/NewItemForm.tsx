import React, { useState } from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./NewItemFormStyle";

interface NewItemFormProps {
  onAdd(test: string): void;
}

const NewItemForm: React.FC<NewItemFormProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  return (
    <NewItemFormContainer>
      <NewItemInput
        autoFocus
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  );
};

export { NewItemForm };
