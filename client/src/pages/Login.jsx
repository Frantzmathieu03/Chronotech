import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {LOGIN} from '../utils/mutation';
import Auth from '../utils/auth';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
const [loginUser, {err, data}]= useMutation(LOGIN);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Both fields are required');
      return;
    }
try {
  const {data}= await loginUser({
    variables: {email, password}
  })
console.log(data.loginUser.token)
Auth.login(data.loginUser.token)
} catch (e) {
  console.error(e);
}
    setError('');
    console.log('Logging in with:', { email, password });
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Ensures the container takes up the full viewport height
    backgroundColor: '#f5f5f5',
    fontFamily: `'Poppins', sans-serif`,
  };

  const formStyle = {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontFamily: `'Poppins', sans-serif`,
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: 'orange',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: `'Poppins', sans-serif`,
    boxSizing: 'border-box',
  };

  const errorStyle = {
    color: 'red',
    marginBottom: '10px',
    textAlign: 'center',
    fontFamily: `'Poppins', sans-serif`,
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '2rem', color: '#333', marginBottom: '1rem' }}>Login</h1>
      {error && <p style={errorStyle}>{error}</p>}
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label htmlFor="email" style={{ fontFamily: `'Poppins', sans-serif` }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="password" style={{ fontFamily: `'Poppins', sans-serif` }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
