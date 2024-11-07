import React, { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'


function Login() {
    const [username , setUsername] = useState('')
    const [password, setpassword] = useState('') 

    const {setUser}  = useContext(UserContext)
 
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})

    }

  return (
    <div    >
        <h2>Login</h2>
        <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type="text" placeholder='password' value={password} onChange={(e=> setpassword(e.target.value))} />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login