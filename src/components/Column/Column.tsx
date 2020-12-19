import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import { useItemDrag } from "../../hooks/useItemDrag";
import { useAppState } from "../../state/AppState/AppState";
import { addTask, moveList } from "../../state/AppState/AppStateActions";
import { DragItem, Task } from "../../state/AppState/AppStateTypes";
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
  const ref = useRef<HTMLDivElement>(null);
  const { isDragging, drag } = useItemDrag({ type: "COLUMN", uid });
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover(item: DragItem) {
      const dragID = item.uid;
      const hoverID = uid;
      if (dragID === hoverID) return;
      dispatch(moveList({ dragID, hoverID }));
    },
  });

  const addCard = (text: string) => {
    dispatch(addTask(text, uid));
  };

  drag(drop(ref));

  return (
    <ColumnContainer ref={ref} isHidden={isDragging}>
      <ColumnTitle>{text}</ColumnTitle>
      {cards.map((task) => (
        <Card key={task.id} text={task.text} />
      ))}
      <AddNewItem toggleButtonText="+ Add another task" onAdd={addCard} dark />
    </ColumnContainer>
  );
};

export { Column };
