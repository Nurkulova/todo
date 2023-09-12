import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  deleteAllTodos,
} from '../../actions/todoActions';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import  Button  from '../Button';

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoForm = styled.div`
  display: flex;
  flex-direction: row ;
  margin-top: 20px;

`;

const Input = styled.input`
  margin-bottom: 10px;
  border: 3px solid #008080;
  padding:10px;
  border-radius:10px;
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  margin:10px;
  &:hover {
    background-color: #c82333;
  }
`;


const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
      setNewTodo('');
    }
  };

  return (
    <TodoContainer>
      <TodoForm>
        <Input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button 
         onClick={handleAddTodo}
         >Add</Button>
        <DeleteButton 
          onClick={() => dispatch(deleteAllTodos())}>
        Delete All
      </DeleteButton>
      </TodoForm>
      
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => dispatch(deleteTodo(todo.id))}
            onToggle={() => dispatch(toggleTodo(todo.id))}
            onEdit={(text) => dispatch(editTodo({ ...todo, text }))}
          />
        ))}
      </ul>
    </TodoContainer>
  );
};

export default TodoList;
