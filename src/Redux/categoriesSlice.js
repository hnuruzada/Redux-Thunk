import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const FetchCategories=createAsyncThunk(
    'categories/FetchCategories',
    async ()=>{
        const response=await fetch('https://northwind.vercel.app/api/categories')
        
        return response.json()
    }
)

export const AddCategory=createAsyncThunk(
    'categories/AddCategory',
    async (category)=>{
        const response=await fetch('https://northwind.vercel.app/api/categories',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(category)
        })
        return response.json()
    }
)

export const UpdateCategory=createAsyncThunk(
    'categories/UpdateCategory',
    async ({id,category})=>{
        const response=await fetch(`https://northwind.vercel.app/api/categories/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(category)

        })
        return response.json()
    }
)

export const DeleteCategory=createAsyncThunk(
    'categories/DeleteCategory',
    async (id)=>{
    const response=await fetch(`https://northwind.vercel.app/api/categories/${id}`,{
        method:'DELETE'   
     })
     return id;
    }
)

const initialState={
    entity:[],
    loading:false,
    error:null
}
const CategorySlice=createSlice({
    name:"category",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(FetchCategories.pending,(state)=>{
            state.loading=true
        })
        .addCase(FetchCategories.fulfilled,(state,action)=>{
            state.loading=false
            state.entity=action.payload
        })
        .addCase(FetchCategories.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
        .addCase(AddCategory.pending,(state)=>{
            state.loading=true
        })
        .addCase(AddCategory.fulfilled,(state,action)=>{
            state.loading=false
            state.entity.push(action.payload)
        })
        .addCase(AddCategory.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
        .addCase(UpdateCategory.pending,(state)=>{
            state.loading=true
        })
        .addCase(UpdateCategory.fulfilled,(state,action)=>{
            state.loading=false
            const index=state.entity.findIndex(category=>category.id===action.payload.id)
            if(index!==-1){
                state.entity[index]=action.payload
            }
        })
        .addCase(UpdateCategory.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
        .addCase(DeleteCategory.pending,(state)=>{
            state.loading=true
        })
        .addCase(DeleteCategory.fulfilled,(state,action)=>{
            state.loading=false
            state.entity=state.entity.filter(category=>category.id!==action.payload)
            console.log(state.entity);
        })
        .addCase(DeleteCategory.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
})


export default CategorySlice.reducer