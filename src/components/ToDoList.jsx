import React from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList(props) {
    const {todos} = props // observe that the attriute name given in APP.jsx (todos = {todos}), is the same as here when we are destructuring the prop

    const {handleDeleteTodos} = props
  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => {
            return (
                <ToDoCard {...props} key={todoIndex} index = {todoIndex} >
                    <p>
                        {todo}
                    </p>
                </ToDoCard>
            )
        })}
    </ul>
  )
}