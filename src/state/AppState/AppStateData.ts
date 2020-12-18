import { AppState } from "./AppStateTypes";

export const appData: AppState = {
  lists: [
    {
      id: 0,
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app" }],
    },
    {
      id: 1,
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn JavaScript" }],
    },
    {
      id: 2,
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to type" }],
    },
  ],
};
