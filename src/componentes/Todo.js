import React, { useState } from "react";
import "./Todo.css";

function Todo({ todo, handleDelete, toggleComplete }) {
  const [newTitle, setNewTitle] = useState(todo.title)
  
  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    }else{
      todo.title = "";
      setNewTitle(e.target.value)
    }
  }
  return (
    <div className="tarea">
      <input 
      style={{ textDecoration: todo.completed && "line-through"}}
      type="text"
      value={todo.title === "" ? newTitle : todo.title}
      className="list"
      onChange={handleChange}/>
      <button className="complete-button" onClick={() => toggleComplete(todo)}>Complete</button>
      <button onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Todo;
