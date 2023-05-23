import { combineReducers, createStore } from "redux";
import todoReducer from "../reducers/todoReducer";

const store = createStore(todoReducer)

export default store

// import { configureStore } from '@reduxjs/toolkit'
// import {todoReducer} from '../reducers/todoReducer.js'

// export const store = configureStore({
//   reducer: {
//     todos: todoReducer,
//   },
// })