import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';


const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

    return (
        <div>
            <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
                <input
                    type='text'
                    className='bg-gray-800 rounded border border-gray-700 forcus:border-indogo-500 focus:ring-indigo-900 text-base text-gray-100 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    placeholder='Enter todo'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type='submit'
                    className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>Add todo</button>
            </form>

        </div>
    )
}

export default AddTodo
