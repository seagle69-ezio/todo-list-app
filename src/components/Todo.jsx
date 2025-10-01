import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { MdEdit } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import '../App.css'

function Todo({todo, onRemoveTodo, onUpdateTodo}) {

   const {id, content} = todo

   const[editable, setEditable] = useState(false);
   const[newTodo, setNewTodo] = useState(content);

   const removeTodo = () => {
    onRemoveTodo(id);
   }

   const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo
    }
    onUpdateTodo(request)
    setEditable(false)
   }

  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid black', 
    padding: '10px', 
    marginTop: '10px'}}>
     <div>
       {
        editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text" className='todo-input'
        style={{width: '380px'}}/> : content
       }
     </div>
     <div>
     <CiCircleRemove className='todo-icons' onClick={removeTodo}/>
      {
        editable ? <FaCheckCircle className='todo-icons' onClick={updateTodo}/> : <MdEdit className='todo-icons' onClick={() => setEditable(true)}/>
      }
     </div>
    </div>
  )
}

export default Todo