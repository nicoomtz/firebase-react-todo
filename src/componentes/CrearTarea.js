import React, { useState } from "react";
import Todo from "./Todo";
import "./CrearTarea.css";
import { db } from '../firebase';
import { 
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc } from 'firebase/firestore'

function CrearTarea(props) {
  const [input, setInput] = useState(
    window.localStorage.getItem("input") || ``
  );
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input !== "") {

      await addDoc(collection(db, "todos"), {
        title: input,
        completed: false,
      })
      setInput("")
    }
  }

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  }

  return (
    <div className="crear-tarea-container">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="Enter todo..." className="input-principal"/>
        <button type="submit" className="boton-agregar">
          Agregar Tarea
        </button>
      </form>
      <div className="lista-de-tareas">
        {props.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default CrearTarea;
