import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

const Signup = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setLocation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3636/user/signup', {
        userName,
        password,
        email,
        phoneNumber,
        address,
      });
      console.log(response)
      setUsername('');
      setPassword('');
      setEmail('');
      setPhoneNumber('');
      setLocation('');
    } catch (error) {
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>


        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={address}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <a className="login-link" href="/login">
        Already have an account? Log in
      </a>
    </div>
  );
};

export default Signup;
