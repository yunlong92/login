import React from 'react'
import {useState} from 'react'
import {useNavigate } from 'react-router-dom'


const Register = () => {

    let navigate = useNavigate()

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registeredUser(event) {
        event.preventDefault()   
        const response = await fetch('http://localhost:5003/users/register',{
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
        console.log(data,response)
        if(response.ok) {
           alert('You succesfully registered, please login')
           navigate("/login")
          
        }
       }

    return (
        <>
            <h1>Login/Register</h1>
            <h3>Fill below to register. Click login if you are already registred.</h3>
            <form onSubmit={registeredUser}>
                <input 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                type="text"   
                placeholder="Name"   
                required         
                /> <br />
                <input 
                value={lastname}
                onChange={(e)=> setLastname(e.target.value)}
                type="text" 
                placeholder="Lastname"  
                required            
                /> <br />
                <input 
                value={email}
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
                     
                /><br />
                <input type="submit" value="Register"  />
            </form>

            <button onClick={() => navigate('/login')}>Login</button>
     </>
    )
}
export default Register