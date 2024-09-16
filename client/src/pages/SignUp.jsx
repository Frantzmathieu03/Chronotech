import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

const REGISTER_USER = gql`
mutation RegisterUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    registerUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      id
      token
    }
  }
`;

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser({ variables: { firstName, lastName, email, password } });
            console.log(response);
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh', 
            backgroundColor: '#f4f4f9', 
            fontFamily: `'Poppins', sans-serif`
        }}>
            <h2 style={{ color: '#333', marginBottom: '1.5rem', fontSize: '2rem' }}>Sign Up</h2>
            <form onSubmit={handleSubmit} style={{
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem', 
                width: '100%', 
                maxWidth: '400px', 
                backgroundColor: '#fff', 
                padding: '2rem', 
                borderRadius: '8px', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    style={{
                        padding: '12px',
                        fontSize: '16px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        outline: 'none',
                        fontFamily: `'Poppins', sans-serif`
                    }}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    style={{
                        padding: '12px',
                        fontSize: '16px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        outline: 'none',
                        fontFamily: `'Poppins', sans-serif`
                    }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                        padding: '12px',
                        fontSize: '16px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        outline: 'none',
                        fontFamily: `'Poppins', sans-serif`
                    }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                        padding: '12px',
                        fontSize: '16px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        outline: 'none',
                        fontFamily: `'Poppins', sans-serif`
                    }}
                />
                <button type="submit" style={{
                    padding: '12px', 
                    fontSize: '16px', 
                    backgroundColor: 'orange', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer',
                    fontFamily: `'Poppins', sans-serif`,
                    transition: 'background-color 0.3s ease'
                }}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
