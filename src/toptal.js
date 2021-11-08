import React, { useState } from 'react'

const Toptal = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (username, password) => {
        //console.log(username, password)

    }
    return (
        <div>

            <input id="username-input" value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input id="username-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button id="login-button" disabled={username && password ? false : true} type="button" onClick={() => onSubmit(username, password)}>SUBMIT</button>
        </div>
    )
}


export default function LoginForm({ onSubmit }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (<div>
        <input id="username-input" value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
        <br />
        <input id="password-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button id="login-button" disabled={username && password ? false : true} type="button" onClick={() => onSubmit(username, password)}>SUBMIT</button>
    </div>);
}



