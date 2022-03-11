import React, { useState } from "react";
import {useHistory} from 'react-router-dom'

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  async function loginUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:3000/login',{
    method:'post',
    headers:{
      'Content-type' : 'application/json'  
    },  
    body: JSON.stringify({
        email:email,
        password:password
      }),
    }) 
    history.push('/table')

  }


  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={loginUser}>
        <label>
         Email:
       </label>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          required
        />
        <br />
        <label>
         Password:
       </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          required
        />
        <br />
        <button>submit</button>
      </form>
      <a href="/register">Register</a>
    </div>
  );
}

export default App;
