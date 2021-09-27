import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AutoSuggest from './autosuggest';
import './App.css';

function App() {

  const mytodos = [
    {
      'id': 1,
      'task': 'Go to the Mechanic',
      'done': false
    },
    {
      'id': 2,
      'task': 'I\'m comming to the office',
      'done': false
    },

  ]

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [countUndone, setCountUndone] = useState(0)
  //console.log(input)

  const addTodo = (event) => {
    event.preventDefault()//to prevent the submit button from refreshing page
    const id = Math.floor(Math.random() * 100)
    const inputtask = { id: id, task: input, done: false }
    setTodos([...todos, inputtask])
    setInput('')
  }
  const toggleDone = (id) => {
    let i = countUndone
    let mytass = todos.map((todo) => {
      console.log(todo.id, todo.task, countUndone);
      if (todo.id === id) {
        setCountUndone(--i)
        return { ...todo, done: !todo.done }
      } else {

        return todo
      }
    })
    setTodos(mytass)
    //console.log(isDone)
  }

  const Task = () => {
    let i = 0
    let myTask = todos.map(todo => {
      //console.log(todo.id, todo.task, countUndone)
      if (todo.done === false) setCountUndone(++i)
      return (
        < li className={todo.done ? 'is__done' : ''} onClick={() => toggleDone(todo.id)} key={todo.id}>{todo.task}</li>

      )
    })
    return myTask

  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact>
            <h1>Get things done faster</h1>
            <form action=""> {/* to use button as form submission and press enter to submit*/}
              <input onChange={e => setInput(e.target.value)} value={input} type="text" />
              <button disabled={!input} onClick={addTodo} type='submit'>Add Todo</button>
            </form>
            {
              todos.length !== 0 && <h3>{`${countUndone} remaining out of ${todos.length} task `}</h3>
            }
            <ul><Task /></ul>
          </Route>
          <Route path='/autosuggest'>
            <AutoSuggest />
          </Route>
        </Switch>


      </div >
    </Router>
  );
}

export default App;
