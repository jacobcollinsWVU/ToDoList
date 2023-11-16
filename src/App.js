import React, { useState, useRef } from 'react';
import './App.css';

// Functions to utilize lists
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  // Function to add items to the list
  const addTodo = () => {
    const text = inputRef.current.value;
    if (text.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, text]);
      inputRef.current.value = '';
    }
  };

  // Function to remove items from the list
  const removeTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  // HTML code for the site
  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input type="text" ref={inputRef} placeholder="Enter an item" />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-box">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
