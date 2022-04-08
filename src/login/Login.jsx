import React from 'react'
import {useState} from 'react'
import {useNavigate } from 'react-router-dom'


const Login = () => {

    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
     event.preventDefault()   
     const response = await fetch('http://localhost:5003/users/login',{
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             email,
             password,
         }),
     })

     const data = await response.json()

     if(data.user) {
        navigate("/welcome")
     } else {
         alert('User not found, try again!')
     }
    }

    return (
        <>
            <h1> Login</h1>
            <form onSubmit={loginUser}>
                 <input 
                value={email}
                id='emailInput'
                onChange={(e)=> setEmail(e.target.value)}
                type="email" 
                placeholder="Email"  
                required 
                /><br />
                <input 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                type="password"   
                placeholder="Password"  
                required             
                /><br />
                <input type="submit" value= "Login"  />
            </form>
     </>
    )
}
export default Login