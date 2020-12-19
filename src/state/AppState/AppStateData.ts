import { AppState } from "./AppStateTypes";

export const appData: AppState = {
  lists: [
    {
      id: "FCOLUM1",
      text: "To Do",
      tasks: [{ listID: "0", id: "c0", text: "Generate app" }],
    },
    {
      id: "SCOLUM222",
      text: "In Progress",
      tasks: [{ listID: "0", id: "c2", text: "Learn JavaScript" }],
    },
    {
      id: "TCOLUM33333",
      text: "Done",
      tasks: [{ listID: "0", id: "c3", text: "Begin to type" }],
    },
  ],
};
