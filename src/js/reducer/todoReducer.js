import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  DONE_UNDONE_TODO,
} from "../actionTypes";

const initialState = {
  todoList: [
    {
      id: Math.random(),
      tache: "learn API",
      done: false,
    },
    {
      id: Math.random(),
      tache: "learn javascript and redux",
      done: false,
    },
  ],
};
const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: [...state.todoList.filter((el) => el.id !== payload)],
      };
    case EDIT_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList.map((el) =>
            el.id === payload.id ? { ...el, tache: payload.tache } : el
          ),
        ],
      };

    case DONE_UNDONE_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList.map((el) =>
            el.id === payload ? { ...el, done: !el.done } : el
          ),
        ],
      };

    default:
      return state;
  }
};

export default todoReducer;
