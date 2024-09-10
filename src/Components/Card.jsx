import React, { useState } from 'react';

const Cards = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div class="container">
      {todos.length === 0 ? (
        <p><strong>No tasks available</strong></p>
      ) : (
        todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        ))
      )}
    </div>
  );
};

const TodoCard = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...todo });

  const handleSave = () => {
    updateTodo(editedTask);
    setIsEditing(false);
  };

  const handleStatusChange = (e) => {
    setEditedTask({ ...editedTask, status: e.target.value });
    updateTodo({ ...editedTask, status: e.target.value });
  };

  return (
    <div className="card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask.name}
            onChange={(e) => setEditedTask({ ...editedTask, name: e.target.value })}
          />
          <textarea
            value={editedTask.description}
            onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
          />
          <button onClick={handleSave} class="btn btn-success">Save</button>
        </>
      ) : (
        <>
          <h3 id='h3'>{todo.name}</h3>
          <p id="p">{todo.description}</p>
          <p id="p1" class="sts">Status: {todo.status}</p>
        </>
      )}
      <button onClick={() => deleteTodo(todo.id)} class="btn btn-danger" >Delete</button>
      <button onClick={() => setIsEditing(!isEditing)} class="btn btn-info">Edit</button>
      <div>
        <label class="statuslabel">Status:</label>
        <select value={todo.status} onChange={handleStatusChange} id="sts">
          <option value="completed" class="btn btn-success">Completed</option>
          <option value="not-completed" class="btn btn-danger">Not Completed</option>
        </select>
      </div>
    </div>
  );
};

export default Cards;
