import { Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { Form } from 'components';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedObject = localStorage.getItem('todos');

    return savedObject ? JSON.parse(savedObject) : [];
  });
  const addTodo = text => {
    const newTodo = { id: nanoid(), text };
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const deleteTodos = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Form omSubmit={addTodo} />
      {todos.length > 0 ? (
        <TodoList todos={todos} onDelete={deleteTodos} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
