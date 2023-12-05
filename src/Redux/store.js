import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todosSlice from "./todosSlice";
import categoriesReducer from "./categoriesSlice";



export const store=configureStore({
    reducer:{
        counter:counterSlice,
        todos:todosSlice,
        category:categoriesReducer
    }
})