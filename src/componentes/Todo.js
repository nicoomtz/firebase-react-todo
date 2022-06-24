import React, { useState } from "react";
import "./Todo.css";
import { CheckCircle, Delete } from "@mui/icons-material";

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
      <button className="complete-button" onClick={() => toggleComplete(todo)}><CheckCircle id="i"/></button>
      <button onClick={() => handleDelete(todo.id)}>
        <Delete id="i"/>
      </button>
    </div>
  );
}

export default Todo;
