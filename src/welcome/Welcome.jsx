import React from "react";
import {useNavigate } from 'react-router-dom'

const Welcome = () => {
    let navigate = useNavigate()
    return (
        <>
           <h1>Welcome to your page</h1>
           <button onClick={() => navigate('/')}>Logout</button>
    </>
)}

export default Welcome