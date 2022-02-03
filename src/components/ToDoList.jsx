import React from 'react'

export function ToDoList({ toDos }) {
    return (<ul>{toDos.map((todo => (<li>tarea</li>)))}    </ul>
    )
}
