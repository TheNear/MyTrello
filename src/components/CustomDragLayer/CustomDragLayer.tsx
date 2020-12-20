import React from "react";
import { useDragLayer } from "react-dnd";
import { Card } from "../Card/Card";
import { Column } from "../Column/Column";
import { getItemStyles } from "./getDragStyle";

const CustomDragLayer: React.FC = () => {
  const { item, isDragging, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging) return null;

  if (item.type === "COLUMN") {
    return (
      <div style={getItemStyles(currentOffset)}>
        <Column cards={item.cards} text={item.text} uid={item.uid} />
      </div>
    );
  }

  if (item.type === "CARD") {
    return (
      <div style={getItemStyles(currentOffset)}>
        <Card text={item.text} uid={item.uid} listID={item.listID}/>
      </div>
    );
  }

  return null;
};

export { CustomDragLayer };
