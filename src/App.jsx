
import React from "react";
import { ToDoList } from "./components/ToDoList";

export function App() {
    return (<>
        <ToDoList toDos={[
            {
                id: 1, nombre: "hola"
            }, {
                id: 1, nombre: "hola"
            }
        ]} />
        <input type="text" />
        <button>hola</button>
        
        </>)
    
}