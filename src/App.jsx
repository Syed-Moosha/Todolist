// App.js
import React, { useState } from 'react';
import Input from './Components/Input';
import Cards from './Components/Card';
import './index.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all'); // filter: 'all', 'completed', 'not-completed'

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.status === 'completed';
    if (filter === 'not-completed') return todo.status === 'not-completed';
    return true;
  });

  return (
    <div className="App">
      <h1 class="text-center text-success">Todo Application</h1>
      <Input addTodo={addTodo} />
      <div class="filterpart">
        <label>Filter: </label>
        <select onChange={(e) => setFilter(e.target.value)} value={filter} id="filterselect" >
          <option value="all" class="btn btn-primary">All</option>
          <option value="completed" class="btn btn-success">Completed</option>
          <option value="not-completed"class="btn btn-danger"> Not Completed</option>
        </select>
      </div>
      <Cards todos={filteredTodos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
