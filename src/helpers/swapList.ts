import { List } from "../state/AppState/AppStateTypes";

export const swapList = (arr: List[], from: string, to: string): List[] => {
  const fromIndex = arr.findIndex((list) => list.id === from);
  const toIndex = arr.findIndex((list) => list.id === to);
  const splicedItem = arr.splice(fromIndex, 1)[0];
  arr.splice(toIndex, 0, splicedItem);
  return arr;
};