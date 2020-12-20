import { XYCoord } from "react-dnd";

export const getItemStyles = (currentOffset: XYCoord | null): React.CSSProperties => {
  if(!currentOffset) {
    return {
      display: "none",
    };
  }

  const { x, y } = currentOffset;

  return {
    transform: "rotate(5deg)",
    position: "fixed",
    top: y,
    left: x,
    zIndex: 1000,
    pointerEvents: "none",
  };
};