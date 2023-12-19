import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <Provider store={store}>
    <h1>Learn about Redux Toolkit</h1>
    <AddTodo />
    <Todos />
    </Provider>
  )
}

export default App
