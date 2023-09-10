import React from 'react'
import { useState } from 'react';
const EditTodoForm = ({editTodo,task}) => {
  const [value,setValue] = useState(task.task);
  const handleValue = (e)=>{
    setValue(e.target.value);
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    editTodo(value,task.id);
    setValue("")
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input value={value} onChange={handleValue} type='text' className='todo-input' placeholder='update Task now'/>
      <button type='submit' className='todo-btn'>update Task</button>
    </form>
  )
}

export default EditTodoForm;