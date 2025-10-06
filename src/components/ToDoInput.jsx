import { useState } from "react"

export default function ToDoInput(props) {
    const {handleAddTodos, todoValue, setTodoValue, } = props

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value) 
            }} type="text" placeholder="Enter todo..." />
            {/* Onchange Listens for change in ip and when that happens an even is passed and setTodoValue is called whill will change the todoValue to the value in input field */}
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('') // to set ip field to og
            }}>Add</button>
        </header>
    )
}