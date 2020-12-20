import { useEffect } from "react";
import { DragElementWrapper, DragSourceOptions, useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { DragItem } from "../state/AppState/AppStateTypes";

interface useItemDragReturn {
  isDragging: boolean;
  drag: DragElementWrapper<DragSourceOptions>;
}
// TODO: Доделать
export const useItemDrag = (item: DragItem): useItemDragReturn => {
  const [{ isDragging }, drag, preview] = useDrag({
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return { isDragging, drag };
};
