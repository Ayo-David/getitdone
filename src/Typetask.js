import React, { useState } from 'react';



const Typetask = ({ value, onChang, onClic }) => {

    const [inpu, setInpu] = useState('')

    return (
        <div>
            <input onChange={(e) => {
                setInpu(e.target.value)
            }} value={value} type="text" />
            <button disabled={!value} onClick={onClic} type='submit'>Add Todo</button>

        </div>
    )
}

export default Typetask