import React from 'react'
import { useState } from 'react'
import './autosuggest.css'

const suggestions = [
  "Alligator",
  "Bask",
  "Crocodilian",
  "Death Roll",
  "Eggs",
  "Jaws",
  "Reptile",
  "Solitary",
  "Tail",
  "Wetlands"
]

export default function AutoSug() {

  const [input, setInput] = useState('')
  const [filtered, setFiltered] = useState([])
  const [active, setActive] = useState(0)

  const handleSuggestion = (e) => {
    //e.preventDefault()
    let value = e.target.value
    setInput(value)
    //method1
    // setFiltered(suggestions.filter((suggestion) => (
    //   suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
    // )))

    //method2 - using IIEF
    const filterSuggestion = (() => {
      let suggest = suggestions.filter((item) => {
        return item.toLowerCase().indexOf(value.toLowerCase()) > -1
        //return item.toLowerCase().indexOf(value.toLowerCase()) > -1
      })
      setFiltered(suggest)
    })()
  }

  const handleClick = (id) => {
    setInput(filtered[id])
    setFiltered([])
  }

  const handleKeyDown = (e) => {
    //console.log('keydown:', e)
    if (e.keyCode === 40) {
      setActive(prev => prev + 1)

    }
    if (e.keyCode === 38) {
      setActive(prev => prev - 1)

    }
    if (e.keyCode === 13) {
      setInput(filtered[active])
      setFiltered([])
      setActive(0)
      //return
    }
  }

  const filterSuggestion = filtered.map((item, id) => {
    return <li
      key={`${item}-${Math.floor(Math.random())}`}
      onClick={() => handleClick(id)}
      className={active === id ? 'active' : ''}
    >
      {item}
    </li >
  }
  )

  return (
    <div>
      <h3>AUTOCOMPLETE</h3>
      <input
        type="text"
        value={input}
        onChange={handleSuggestion}
        onKeyDown={handleKeyDown}
      />
      <ul className='suggestions'>{filterSuggestion}</ul>
    </div>

  )
}