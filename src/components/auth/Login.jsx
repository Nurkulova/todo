import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../actions/authActions';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;

`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  background-color: #15a99d;
  box-shadow: 0px 0px 10px rgba(23, 184, 170, 0.2);
  & h2 {
    color: #4d27b8;
  }
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
 
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight:600;
  &:hover {
    background-color: #0056b3;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  const handleLogin = () => {
    if (isValidEmail(email) && isValidPassword(password)) {
      const user = { email, name: 'User' };
      dispatch(loginSuccess(user));
      setError(''); 
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <LoginContainer>
      <LoginForm>
        <h2>Login</h2>
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
