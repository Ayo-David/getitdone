import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AutoSuggest from './autosuggest';
import './App.css';
import Typetask from './Typetask';

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
    const [clicked, setClicked] = useState(0)
    //console.log(input)

    const addTodo = (event) => {
        event.preventDefault()//to prevent the submit button from refreshing page
        //const id = Math.floor(Math.random() * 100)
        const inputtask = { task: input, done: false }
        setTodos([...todos, inputtask])
        setInput('')
    }
    const toggleDone = (id) => {
        let i = countUndone
        if (clicked === id) {
            setCountUndone(++i)
            return setClicked(0)

        }
        setClicked(id)
        setCountUndone(--i)


        // let i = countUndone
        // let mytass = todos.map((todo) => {
        //  // console.log(todo.id, todo.task, countUndone);
        //   if (todo.id === id) {
        //     setCountUndone(--i)
        //     return { ...todo, done: !todo.done }
        //   } else {

        //     return todo
        //   }
        // })
        // setTodos(mytass)
        //console.log(isDone)
    }

    const Task = () => {
        let i = 0
        let myTask = todos.map((todo, id) => {
            //console.log(todo.id, todo.task, countUndone)
            // if (todo.done === false) setCountUndone(++i)
            return (
                < li className={id === clicked ? 'is__done' : ''} onClick={() => toggleDone(id)} key={id}>{todo.task}</li>

            )
        })
        return myTask

    }
    const onchange = (e) => {
        setInput(e.target.value)
        console.log(input)
    }

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path='/' exact>
                        <h1>Get things done faster</h1>
                        <Typetask value={input} onChang={onchange} onClic={addTodo} />

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
