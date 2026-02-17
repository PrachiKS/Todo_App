
import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAdd}>Add</button>
      <TodoList todos={todos} onRemove={removeTodo} onEdit={editTodo} />
    </div>
  );
}

export default App;
