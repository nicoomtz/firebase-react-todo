import "./styles.css";
import CrearTarea from "./componentes/CrearTarea";
import { useState, useEffect } from "react";
import { 
  collection,
  query,
  onSnapshot,
  } from 'firebase/firestore';
import { db } from './firebase'



export default function App() {
  const [todos, setTodos] = useState([]);

    useEffect(() => {
      const q = query(collection(db, 'todos'))
      const unsub = onSnapshot(q, (querySnapshot) => {
        //array temporario para to-do's
        let todosArray = [];
        // .forEach va a pushear cada todo al array temporario
        querySnapshot.forEach((doc) => {
          todosArray.push({ ...doc.data(), id: doc.id });
        })
        //re-renderizar nuestro UI
        setTodos(todosArray)
      })
      return () => unsub()
    }, [])
    

  return (
    <div className="App">
      <CrearTarea todos={todos} setTodos={setTodos} />
    </div>
  );
}
