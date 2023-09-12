import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authActions'; 
import Button  from './Button';
import styled from 'styled-components';

const StyledHeader = styled.header`
display:flex;
flex-direction:row;
justify-content:space-between;
background-color:antiquewhite;
& h2{
 padding:20px;
 color:#008080;
}
`
const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <StyledHeader>
      <h2>Todo List</h2>
      <Button onClick={handleLogout}>Logout</Button>
    </StyledHeader>
  );
};

export default Header;
