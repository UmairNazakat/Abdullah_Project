import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';  
import Navbar from "./NavBar";
import {signin} from './../services/api.js'
import "./SignupForm.css";



const SigninForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async(event) => {
    event.preventDefault();
    const userData = {email, password };
   try{
// console.log(userData);
  // await signin(userData); 
   const response = await signin(userData); 
    if(response.status === 201){
      navigate('/Dashboard');
    }
   }catch(error){
    alert(" Incorrect credentials!");
   }
  };

  return (
    <div>
        <Navbar/>
    <div className="signup-form-container" style={{marginTop : '115px'}}>
      <form onSubmit={handleSignin}>
        <h2 >SignIn for Real Estate Updates</h2>
        
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">SignIn</button>
      </form>
      <Link to="/Signup" className="nav-link">Don't have Account</Link>

    </div>
    </div>
  );
};

export default SigninForm; 