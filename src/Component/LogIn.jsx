import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make the API call here using axios or any other library
    axios
      .post('https://login-signup-b.onrender.com/login', { email, password })
      .then((response) => {
        console.log(response.data); 
      })
      .catch((error) => {
       
        console.error(error); 
      });

    // Reset the form
    setEmail('');
    setPassword('');
  };

  return (
    <>
    <form className="login-form" onSubmit={handleSubmit} >
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Log In</button>
      <button type="button" style={{backgroundColor:"red"}} onClick={()=>{navigate("/signup")}}>Sign Up</button>
      
    </form>
    
    </>
  );
};

export default LoginForm;
