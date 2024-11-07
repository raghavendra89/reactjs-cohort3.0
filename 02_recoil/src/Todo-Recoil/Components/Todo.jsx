/* eslint-disable react/prop-types */
// Todo.js
import React from 'react';
import { useRecoilState } from 'recoil';
import { todoAtomFamily } from '../store/atoms/todoAtoms';

const Todo = ({ id }) => {
  const [todo, setTodo] = useRecoilState(todoAtomFamily(id));

  const handleTitleChange = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setTodo({ ...todo, description: e.target.value });
  };

  return (
    <div style={{padding:"10px"}}>
      <input
        type="text"
        value={todo.title}
        onChange={handleTitleChange}
        placeholder="Title"
      />
      <br />
      <textarea
        value={todo.description}
        onChange={handleDescriptionChange}
        placeholder="Description"
      />
    </div>
  );
};

export default Todo;
