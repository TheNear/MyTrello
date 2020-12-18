import { AppState } from "./AppStateTypes";

export const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ listID: "0", id: "c0", text: "Generate app" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ listID: "0", id: "c2", text: "Learn JavaScript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ listID: "0", id: "c3", text: "Begin to type" }],
    },
  ],
};
