import { Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { Form } from 'components';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = text => {
    const newTodo = { id: nanoid(), text };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <Form omSubmit={addTodo} />
      {todos.length > 0 ? (
        <TodoList todos={todos} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
