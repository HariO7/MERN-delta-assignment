import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:3000/register',{
    method:'post',
    headers:{
      'Content-type' : 'application/json'  
    },  
    body: JSON.stringify({
        name:name,
        email:email,
        password:password
      }),
    }) 
    const data = await response.json()
    console.log(data);
  }


  return (
    <div>
      <h1>Register page</h1>
      <form onSubmit={registerUser}>
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          required
        />
        <br />
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
        <a href="/login">Login</a>
    </div>
  );
}

export default App;
