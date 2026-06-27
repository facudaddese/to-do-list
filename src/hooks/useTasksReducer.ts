import { useReducer } from "react";
import type { State } from "../types/task";
import type { Task } from "../types/task";
import type { Payload } from "../types/task";

const initialState: State = {
  tasks: [],
};

export type ActionType =
  | { type: "addTask"; payload: Task }
  | { type: "deleteTask"; payload: string }
  | { type: "editTask"; payload: Payload }
  | { type: "clearTasks" }
  | { type: "toggleCompleted"; payload: string };

const reducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "deleteTask":
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };
    case "editTask":
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload.id
            ? { ...el, name: action.payload.name }
            : el,
        ),
      };
    case "clearTasks":
      return { ...state, tasks: [] };
    case "toggleCompleted":
      return {
        ...state,
        tasks: state.tasks.map((el) =>
          el.id === action.payload ? { ...el, completed: !el.completed } : el,
        ),
      };
    default:
      return state;
  }
};

export const useTasksReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};
