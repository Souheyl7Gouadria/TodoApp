import React from 'react'
import { useState } from 'react';
const TodoForm = ({addTodo}) => {
  const [value,setValue] = useState();
  const handleValue = (e)=>{
    setValue(e.target.value);
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    addTodo(value);
    setValue("")
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input value={value} onChange={handleValue} type='text' className='todo-input' placeholder='what is the task today'/>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm;