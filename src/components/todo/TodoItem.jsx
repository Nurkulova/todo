import React, { useState } from 'react';
import styled from 'styled-components';
import  Button  from '../Button';
const TodoContainer = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  text-decoration:none;
  & input{
    flex: 1;
  font-size: 1.2rem;
  border: 1px solid aquamarine;
  padding:10px;
  border-radius:10px;
  }
`;
const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #c82333;
  }
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Text = styled.span`
  flex: 1;
  font-size: 1.2rem;
  border: 1px solid aquamarine;
  padding:10px;
  border-radius:10px;
  ${({ completed }) => completed && `text-decoration: line-through;`}
`;

const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(newText);
    setIsEditing(false);
  };


  return (
    <TodoContainer>
      
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <Button
           onClick={handleSave}>Save</Button>
        </>
      ) : (
        <>
          <Text completed={todo.completed}><Checkbox
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
        disabled={isEditing}
      />{todo.text} 
          </Text>
          <Button 
         onClick={handleEdit} disabled={todo.completed}>
            Edit
          </Button>
          <DeleteButton
           onClick={onDelete}>Delete</DeleteButton>
        </>
      )}
    </TodoContainer>
  );
};

export default TodoItem;

