export const ADD_TODO = "ADD_TODO";
export const DELETE_ITEM = "DELETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const TOGGLE_TODO = "TOGGLE_TODO";

let lastId = 0;

export function addTodo(newTodo){
    const id = ++lastId;
    newTodo.id = id;
    return{
        type: ADD_TODO,
        payload: newTodo
    }
}

export function deleteItem(itemId) {
    return {
      type: DELETE_ITEM,
      payload: itemId
    };
}

export function editItem(itemId, updatedTitle) {
  return {
    type: EDIT_ITEM,
    payload: {
      id: itemId,
      title: updatedTitle,
    },
  };
}

export function toggleTodo(itemId) {
    return {
      type: TOGGLE_TODO,
      payload: itemId,
    };
}