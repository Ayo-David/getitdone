import React, { useState } from 'react'
import { useEffect } from 'react'

const Todo = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const disabledButton = input === ''

  const handleSubmit = (e) => {
    e.preventDefault()
    let id = todos.length
    let inputTodo = { id: id, todo: input, clicked: false }
    setTodos([...todos, inputTodo])
    setInput('')
  }

  const handleDelete = (id) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, clicked: !item.clicked }
      } else {
        return { ...item }
      }
    })
    //console.log(`newTodos = `, newTodos)
    setTodos(newTodos)
  }

  const listTodo = todos.map((item) => {
    const { id, todo, clicked: deleted } = item
    return (
      <li
        key={id}
        onClick={() => handleDelete(id)}
        style={{ textDecoration: deleted ? 'line-through' : '' }}
      >
        {todo}
      </li >
    )
  })

  const toComplete = todos.filter(item => {
    return item.clicked === false
  }

  )



  useEffect(() => {
    //console.log(`todos = `, todos)
  }, [todos])


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>My Todo List is {toComplete.length}</div>
        <input type="text" value={input} onChange={(e) => {
          e.preventDefault()
          setInput(e.target.value)
        }} />
        <button disabled={disabledButton} >Submit</button>
      </form>
      <p>
        <ul>
          {listTodo}
        </ul>
      </p>
    </div>
  )

}

export default Todo

