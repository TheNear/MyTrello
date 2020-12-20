import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import { useItemDrag } from "../../hooks/useItemDrag";
import { useAppState } from "../../state/AppState/AppState";
import { addTask, moveList, moveTask } from "../../state/AppState/AppStateActions";
import { DragItem, MoveTaskStatus, Task } from "../../state/AppState/AppStateTypes";
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
  // TODO: Типизировать тип DND
  const { isDragging, drag } = useItemDrag({ type: "COLUMN", uid, text, cards });
  const [, drop] = useDrop({
    accept: ["COLUMN", "CARD"],
    hover(item: DragItem) {
      if (item.type === "COLUMN") {
        const dragID = item.uid;
        const hoverID = uid;
        if (dragID === hoverID) return;
        dispatch(moveList({ dragID, hoverID }));
      }
    },

    drop(item: DragItem, monitor) {
      if (!monitor.canDrop()) return;
      if (item.type === "CARD") {
        if (uid === item.uid) return;
        const moveMap: MoveTaskStatus = {
          dragID: item.uid,
          hoverID: 0,
          sourceColumn: item.listID,
          targterColumn: uid,
        };

        dispatch(moveTask(moveMap));
      }
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
        <Card key={task.id} text={task.text} uid={task.id} listID={task.listID} />
      ))}
      <AddNewItem toggleButtonText="+ Add another task" onAdd={addCard} dark />
    </ColumnContainer>
  );
};

export { Column };
