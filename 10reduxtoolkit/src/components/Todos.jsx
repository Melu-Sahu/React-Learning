import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';


const Todos = () => {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();



  return (
    <div>
      <h1>Todos</h1>
      {
        todos.map((todo)=>(
            <li key={todo.id}>{todo.text} <button className='text-white bg-red-500 mx-3 px-7 rounded py-1' onClick={()=>{dispatch(removeTodo(todo.id))}}>X</button> </li>
        ))
      }
    </div>
  )
}

export default Todos
