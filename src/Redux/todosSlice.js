


//Create Slice

import { createSlice } from "@reduxjs/toolkit";

// [...state,newState]  newState=action.payload  eger action yuklenende yenilik varsa state elave elesin


export const todosSlice=createSlice({
    name:"todos",
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
        },
        editTodo:(state,action)=>{
            const index=state.findIndex(todo=>todo.id===action.payload.id)
            state[index]=action.payload
        },
        deleteTodo:(state,action)=>{
            return state.filter(todo=>todo.id!==action.payload)
        }
    }
})


export const {addTodo,editTodo,deleteTodo}=todosSlice.actions
export default todosSlice.reducer