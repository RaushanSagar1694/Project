

import React, { useState } from 'react'
import './LoginSignup.css';
import user from '../../assets/person.png';
import email from '../../assets/email.png';
import password from '../../assets/password.png';



const LoginSignup = () => {

  const [action, setAction ] = useState("Login");

  return (
    <div>
      <div className="container">
        <div className="header">
            <div className="text"> {action} </div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action == "Sign Up" ? <><div className="input">
                <img src={user} alt="" />
                <input type='text' placeholder='Name'/>
            </div>
            </> : <></>}
            <div className="input">
                <img src={email} alt="" />
                <input type='email' placeholder='Email Id'/>
            </div>
            <div className="input">
                <img src={password} alt="" />
                <input type='password' placeholder="Password"/>
            </div>
        </div>
        <div className="forgot-password">Lost Password <span>Click Here!</span></div>
        <div className="submit-container">
            <div className = {action == "Login" ? "submit_gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
            <div className = {action == "Sign Up" ? "submit_gray" : "submit" } onClick={() => setAction("Login")}>Login</div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
