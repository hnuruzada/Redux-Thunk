import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, editTodo } from './Redux/todosSlice'
import { v4 as uuidv4 } from 'uuid';

const Todos = () => {
    const [input,setInput]=useState("")
    const [editId,setEditId]=useState(null)
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()

    const handleAddTodo=()=>{
        if(!input) return;
        dispatch(addTodo({
            id:uuidv4(),
            text:input,
        }))
    }

    const handleEdit=(todo)=>{
        setInput(todo.text)
        setEditId(todo.id)
    }

    const handleSave=()=>{
        dispatch(editTodo({
            id:editId,
            text:input
        }))

        setInput("")
        setEditId(null) 
    }

    const handleDelete=(id)=>{
        dispatch(deleteTodo(id))
    }

  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        {editId ? <button onClick={handleSave}>Save</button> :<button onClick={handleAddTodo}>Add</button> }


        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>{todo.id}-{todo.text}
                 <button onClick={()=>handleEdit(todo)}>Edit</button> 
                 <button onClick={()=>handleDelete(todo.id)}>Delete</button></li>
            ))}
        </ul>
    </div>
  )
}

export default Todos