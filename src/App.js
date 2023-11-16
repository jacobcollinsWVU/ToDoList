import React, { useState, useRef } from 'react';
import './App.css';

// Component for TodoList
const TodoList = () => {
  
  // useState and useRef
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  // Function to add items to the list
  const addTodo = () => {
    // Grab input field value
    const text = inputRef.current.value;
    // Check for empty box
    if (text.trim() !== '') {
      // Create new array of todos
      setTodos((prevTodos) => [...prevTodos, text]);
      // Clear input box after adding todo
      inputRef.current.value = '';
    }
  };

  // Function to remove items from the list
  const removeTodo = (index) => {
    // Uses filter to remove the previous todo
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

export default TodoList;
