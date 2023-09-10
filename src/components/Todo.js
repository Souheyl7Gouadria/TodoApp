import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
const Todo = ({task,handlecomplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
      <div>
        <p onClick={()=>handlecomplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task} </p>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)}/>
        <FontAwesomeIcon onClick={()=>deleteTodo(task.id)} icon={faTrash}/>

      </div>
    </div>
  )
}

export default Todo;