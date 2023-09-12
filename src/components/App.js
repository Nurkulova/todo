import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './auth/Login';
import TodoList from './todo/TodoList';
import styled  from 'styled-components';
import Header from './Header';

const AppContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  margin:20px auto;
`;

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <AppContainer>
      <Header />
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/todos" /> : <Login />} />
          <Route path="/todos" element={isAuthenticated ? <TodoList /> : <Navigate to="/login" />} />
          <Route index element={<Navigate to="/login" />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
