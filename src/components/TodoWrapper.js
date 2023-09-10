import React from 'react'
import TodoForm from './TodoForm';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {
  const [todos,setTodos] = useState([]);
  const addTodoHandler =(todo) =>{
    setTodos([...todos,{id:uuidv4(),task:todo,completed:false , isEditing:false}]);
    console.log(todos);
  }
  const toggleComplete = id =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  const handleDeleteTodo = id =>{
    setTodos(todos.filter(todo =>todo.id !== id));
  }
  const handleEditTodo =id =>{
    setTodos(todos.map(todo => todo.id  === id ? {...todo, isEditing:!todo.isEditing} : todo))
  }
  const editTask=(task,id) =>{
    setTodos(todos.map(todo => todo.id === id ? {todo,task, isEditing: !todo.isEditing } : todo))
  }
  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodoHandler}/>
      {todos.map((todo,i)=>(
        todo.isEditing ? (<EditTodoForm editTodo={editTask} task={todo}/>) : (
          <Todo key={i} task ={todo} handlecomplete={toggleComplete}
        deleteTodo={handleDeleteTodo} editTodo={handleEditTodo}/>
        )
      ))}
    </div>
  )
}

export default TodoWrapper;