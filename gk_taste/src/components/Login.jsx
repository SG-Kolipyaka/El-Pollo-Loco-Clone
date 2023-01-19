import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        Welcome to Login Page <br />
       <input placeholder='Please enter your id' type="text" /><br />
       <input placeholder='please enter Password' type="Password" /><br />
       <button>Submit</button>

       <h3>If new user</h3>
<NavLink to="/register">Register</NavLink>
    </div>
  )
}

export default Login