import React, { useState } from 'react'
import '../App.css'

function TodoCreate({onCreateTodo}) {

  const [newTodo, setNewTodo] = useState('')
  const Inputclear = () => {
    setNewTodo('')
  }

  const createTodo = () => {
    if(!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 999999999),
      content: newTodo
    }
    onCreateTodo(request)
    Inputclear()
  }


  return (
      <div className='Todo-Create'>
       <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} 
       type="text" className='todo-input' placeholder='Listenize Ekleyin'/>
       <button className='todo-button' onClick={createTodo}>Todo Create</button>
      </div>
  )
}

export default TodoCreate