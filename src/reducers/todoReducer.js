import { ADD_TODO, DELETE_ITEM, EDIT_ITEM, TOGGLE_TODO } from "../actions/todoActions";

const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case DELETE_ITEM:
      const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        todos: updatedTodos,
      };
    case EDIT_ITEM:
      const editTodoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (editTodoIndex !== -1) {
        const updatedTodos = [...state.todos];
        updatedTodos[editTodoIndex].title = action.payload.title;
        return {
          todos: updatedTodos,
        };
      }
      return state;
    case TOGGLE_TODO:
      const toggleTodoIndex = state.todos.findIndex((todo) => todo.id === action.payload);
      if (toggleTodoIndex !== -1) {
        const updatedTodos = [...state.todos];
        updatedTodos[toggleTodoIndex].isDone = !updatedTodos[toggleTodoIndex].isDone;
        return {
          todos: updatedTodos,
        };
      }
      return state;
    default:
      return state;
  }
}

export default todoReducer;
