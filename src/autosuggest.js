import React, { useState } from 'react';
import './autosuggest.css'

const AutoSuggest = () => {
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
    const [input, setInput] = useState('')
    const [showSuggestion, setShowSuggestion] = useState(false)
    const [suggestionList, setSuggestionList] = useState([])
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0)

    const onChange = (e) => {
        setInput(e.target.value)
        setShowSuggestion(true)
        setSuggestionList(suggestions.filter((suggestion) => (
            suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
        )))
    }
    const onKeyDown = (e) => {
        // User pressed the enter key
        if (e.keyCode === 13) {
            setInput(suggestionList[activeSuggestionIndex]);
            setActiveSuggestionIndex(0);
            setShowSuggestion(false);
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
            if (activeSuggestionIndex === 0) {
                return;
            }

            setActiveSuggestionIndex(activeSuggestionIndex - 1);
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
            if (activeSuggestionIndex - 1 === suggestionList.length) {
                return;
            }

            setActiveSuggestionIndex(activeSuggestionIndex + 1);
            console.log(activeSuggestionIndex)
        }
    };



    const selectClicked = (e) => {
        // console.log(e)
        //let picked = suggestions
        setInput(e.target.innerText)
        setShowSuggestion(false)
        setSuggestionList([])
    }

    const ShowSuggestionList = () => {
        let showSuggestion = suggestionList.map((suggestion, index) => {

            let class_name
            index === activeSuggestionIndex && (class_name = 'active')
            return <li className={class_name} key={index} onClick={selectClicked} >{suggestion}</li>
        })
        return (
            <div >
                <ul className='suggestions'>{showSuggestion}</ul>
            </div>
        )
    }

    return (
        <div className="body__main">
            <div className="main__container">
                <h1>AutoCompleter</h1>
                <input type="text" value={input} onChange={onChange} onKeyDown={onKeyDown} />
                {showSuggestion && input && <ShowSuggestionList />}
            </div>

        </div>

    );
}

export default AutoSuggest;
