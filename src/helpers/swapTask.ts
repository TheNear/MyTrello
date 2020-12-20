import { List, MoveTaskStatus } from "../state/AppState/AppStateTypes";

export const bob = "32431";

export const swapTask = (arr: List[], move: MoveTaskStatus): List[] => {
  const { dragID, hoverID, sourceColumn, targterColumn } = move;
  const fromColumn = arr.findIndex((list) => list.id === sourceColumn);
  const toColumn = arr.findIndex((list) => list.id === targterColumn);
  const fromCardIndex = arr[fromColumn].tasks.findIndex((task) => task.id === dragID);
  const toCardIndex = hoverID ? arr[toColumn].tasks.findIndex((task) => task.id === hoverID) : 0;
  arr[fromColumn].tasks[fromCardIndex].listID = targterColumn;
  const item = arr[fromColumn].tasks.splice(fromCardIndex, 1)[0];
  arr[toColumn].tasks.splice(toCardIndex, 0, item);
  return arr;
};
