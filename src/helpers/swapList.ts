import { List, MoveListStatus } from "../state/AppState/AppStateTypes";

export const swapList = (arr: List[], move: MoveListStatus): List[] => {
  const fromIndex = arr.findIndex((list) => list.id === move.dragID);
  const toIndex = arr.findIndex((list) => list.id === move.hoverID);
  const splicedItem = arr.splice(fromIndex, 1)[0];
  arr.splice(toIndex, 0, splicedItem);
  return arr;
};