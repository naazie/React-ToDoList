import { useState, useEffect } from "react"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {
  // let todos = ['Go to the gym',
  //               'Eat more fruits',
  //               'Pick Up the kids']
                // Need to be defined in parent for child components to be able to access this. Works in bottom up structure

  const [todos, setTodos] = useState([])
                // func argument -> data type
  const [todoValue, setTodoValue] = useState("")

  function persistData(newList)
  {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodo)
  {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index)
  {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index)
  {
    const valueToBeEditied = todos[index]
    setTodoValue(valueToBeEditied)
    // persistData(valueToBeEditied)
    handleDeleteTodo(index)
  }

  // takes in both arrow function and dependency array
  useEffect(() => {
    if(!localStorage)
    {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos)
    {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])
  // since dependency array is empty, this func will run whenever a reload occours
  // Other Scenarios - If dependency array contained say todos, then whenever that array changes this would br exec

  return (
    <>
      <ToDoInput todoValue = {todoValue} setTodoValue = {setTodoValue} handleAddTodos = {handleAddTodos}  />
      <ToDoList todos={todos} handleDeleteTodo = {handleDeleteTodo} handleEditTodo = {handleEditTodo} />
    </>
  )
}

export default App
