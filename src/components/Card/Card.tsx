import React, { memo, useRef } from "react";
import { useDrop } from "react-dnd";
import { useItemDrag } from "../../hooks/useItemDrag";
import { useAppState } from "../../state/AppState/AppState";
import { moveTask } from "../../state/AppState/AppStateActions";
import { CardDragItem, MoveTaskStatus } from "../../state/AppState/AppStateTypes";
import { CardContainer } from "./CardStyle";

interface CardProps {
  text: string;
  uid: string,
  listID: string,
}

const Card: React.FC<CardProps> = memo(({ text, uid, listID }) => {
  const { dispatch } = useAppState();
  const { isDragging, drag } = useItemDrag({ type: "CARD", uid, listID, text});
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "CARD",
    drop(item: CardDragItem) {
      if (item.uid === uid) return;
      
      const moveMap: MoveTaskStatus = {
        dragID: item.uid,
        hoverID: uid,
        sourceColumn: item.listID,
        targterColumn: listID,
      };

      dispatch(moveTask(moveMap));
    },


  });

  drag(drop(ref));

  return <CardContainer ref={ref} isHidden={isDragging}>{text}</CardContainer>;
});


export { Card };
