// App.js
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { todoAtomFamily } from '../store/atoms/todoAtoms';
import Todo from './Todo';

export default function Todos(){
  const [todoIds, setTodoIds] = React.useState([]);

  useEffect(() => {
    // Fetch todos from backend (simulated here with sample data)
    const fetchTodos = async () => {
      const todos = await getTodosFromBackend();
      setTodoIds(todos.map((todo) => todo.id));

      // Initialize each todo in the atom family
      todos.forEach((todo) => {
        todoAtomFamily(todo.id); // This creates an atom for each todo with its initial state
      });
    };

    fetchTodos();
  }, []);

  return (
    <div>
      {todoIds.map((id) => (
        <Todo key={id} id={id} />
      ))}
    </div>
  );
};

// Simulate fetching data
const getTodosFromBackend = async () => [
  { id: 1, title: 'Learn React', description: 'Study useState and useEffect' },
  { id: 2, title: 'Learn Recoil', description: 'Explore atoms and selectors' },
  { id: 3, title: 'Build Todo App', description: 'Apply Recoil in a project' },
];
