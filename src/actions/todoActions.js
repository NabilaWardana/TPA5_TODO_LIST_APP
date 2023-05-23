export const ADD_TODO = 'ADD_TODO'

let lastId = 3;

export function addTodo(newTodo){
    const id = ++lastId;
    newTodo.id = id;
    return{
        type: ADD_TODO,
        payload: newTodo
    }
}