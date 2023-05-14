import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccessful, setLoginSuccessful] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3636/user/login', {
        userName,
        password,
      });
      const userData = response.data;
      if (userData) {
        const { userName, phoneNumber, type } = userData;
        localStorage.setItem('userName', userName);
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem('type', type);
        setLoginSuccessful(true); // set the flag indicating successful login
      }
      setUsername('');
      setPassword('');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <a className="signup-link" href="/signup">
        Don't have an account? Sign up
      </a>
      {loginSuccessful && <Navigate to="/" />} {/* conditionally render the Navigate component */}
    </div>
  );
};

export default Login;
