import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hellow redux lerner" }]

}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);

                    //or
            // state.todos = [...state.todos, { text: action.payload, id: nanoid() }]
        },
        removeTodo: (state, action) => {

            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)


            // let newArr = state.todos.filter(item => item.id !== action.payload);
            // return{ ...state, todos:newArr };
        },

        // deleteTodo: (state, action) => {
        //     return state.todos.filter(item => item.id !== action.payload);
        // },



        updateTodo: (state, action) => {
            let newText = action.payload;
            state.todos.map((item) =>
                (item.id === newText[0]) ?
                    ({ ...item, text: newText[1] }) :
                    item);
            // console.log("updated",state.todos);
        }
    }
})

export const {addTodo, removeTodo, updateTodo} =todoSlice.actions
export default todoSlice.reducer