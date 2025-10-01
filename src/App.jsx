import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'


function App() {
  
   const [todos, setTodos] = useState([])

   const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
   }

   const removeTodo = (TodoId) => {
    setTodos([...todos.filter((todo) => todo.id!== TodoId)])
   }

   const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    })

    setTodos([...updatedTodos])
   }

   console.log(todos)

  return (
      <div className='App'>
        <div className='Main'>
        <TodoCreate onCreateTodo = {createTodo}/>
        <TodoList todos = {todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
        </div>
      </div>
  )
}

export default App
