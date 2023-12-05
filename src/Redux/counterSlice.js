import { createSlice } from "@reduxjs/toolkit"



const initialState={
    value:0
}


 const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value=state.value+1
        },
        decrement:(state)=>{
            state.value=state.value-1
        },
        incrementByUser:(state,action)=>{
            state.value=state.value+action.payload
        }


    }
 })


export const {increment,decrement,incrementByUser}=counterSlice.actions

export default counterSlice.reducer