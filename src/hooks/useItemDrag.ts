import { DragElementWrapper, DragSourceOptions, useDrag } from "react-dnd";
import { DragItem } from "../state/AppState/AppStateTypes";

interface useItemDragReturn {
  isDragging: boolean,
  drag: DragElementWrapper<DragSourceOptions>
}
// TODO: Доделать
export const useItemDrag = (item: DragItem): useItemDragReturn => {
  const [{ isDragging }, drag] = useDrag({
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  });

  return { isDragging, drag};
};