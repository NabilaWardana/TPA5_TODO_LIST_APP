import { ADD_TODO } from "../actions/todoActions";

const initialState = {
  todos: [
    { id: 1, title: "belajar react", isDone: false },
    { id: 2, title: "nyoba redux", isDone: false },
    { id: 3, title: "pusiiiiing", isDone: false },
  ],
};

function todoReducer (state = initialState, action){
  switch (action.type){
    case ADD_TODO:
      return{
        todos: [...state.todos, action.payload]
      }

    default: return state
  }
}

export default todoReducer;

// counterSlice.js
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios'

// const config = {
//   headers: {Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY`}
// }

// export const getTodo = createAsyncThunk('todo/getTodo', async() =>{
//   try {
//     const response = await axios.get("https://dummyjson.com/todos");
//     return response
//   } catch (error) {
//     console.log(error);
//   }
// })

// const initialState = {
//   toDo: [
//       {
//         "id" : 1,
//         "title": "Turu",
//         "is_complete" : true
//       },
//       {
//         "id" : 2,
//         "text" : "Watch Pluralsight course on Docker",
//         "is_complete" : true
//       },
//       {
//         "id" : 3,
//         "text" : "Complete presentation prep for Aurelia presentation",
//         "is_complete" : false
//       },
//       {
//         "id" : 4,
//         "text": "Instrument creation of development environment with Puppet",
//         "is_complete" : false
//       },
//       {
//         "id" : 5,
//         "text": "Transition code base to ES6",
//         "is_complete" : false
//       }
//     ],
//   loading: true,
//   error: null,
// };


// // Redux Toolkit slice
// export const todoSlice = createSlice({
//   name: 'todo',
//   initialState,
//   reducers: {},
// });

// export const todoReducer = todoSlice.reducer;