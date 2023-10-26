import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState({todoId:0,TodoTask:'',todoDone:false});
  let todos = [];

  function onTodoAdd(e) {
    if (e.target.value == '') {
      alert('Please enter your ToDo frist...');
    }
    else {
      setTodo(e.target.value);
      todos.push(todo);
    }
  }

  useEffect(()=>{

  },[todos,todo]);


  return (
    <div className=' bg-white text-black rounded-3xl p-4' >
      <h3 className='font-bold p-1'>To Do List</h3>
      <div className='flex mx-4'>
        <input className='rounded-3xl rounded-e-none w-72 p-3 px-5 bg-gray-300 outline-none' placeholder='Add your task' />
        <button onClick={onTodoAdd} className='outline-none p-3 bg-orange-500 text-white px-4 rounded-s-none rounded-3xl'>Add</button>
      </div>

      <div className=' flex flex-col mt-6'>
        {
          todos.map(todo =>
            <div key={todo.todoId}>
              <div className='flex justify-between align-middle w-96 mt-2'>
                <div className='flex'>
                  <input type='checkbox' defaultChecked={todo.todoDone} />
                  <p className='px-5 font-medium'>{todo.todoTask}</p>
                </div>
                <button className='text-white p-1 font-extralight justify-self-end '>Delete</button>
              </div>
              <hr className='mt-1'/>
            </div>
          )
        }
      </div>

    </div>
  )
}

export default App
