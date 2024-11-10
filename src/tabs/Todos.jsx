import { EditForm, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { Form } from 'components';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedObject = localStorage.getItem('todos');
    return savedObject ? JSON.parse(savedObject) : [];
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleEditTodo = todo => {
    setCurrentTodo(todo);
    setIsEditing(true);
  };

  const cancelUpdate = () => {
    setCurrentTodo({});
    setIsEditing(false);
  };

  const updateTodo = updText => {
    const updatedTodo = { ...currentTodo, text: updText };
    const index = todos.findIndex(todo => todo.id === updatedTodo.id);
    setTodos(todos.toSpliced(index, 1, updatedTodo));
    cancelUpdate();
  };

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
      {isEditing ? (
        <EditForm
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo.text}
          updateTodo={updateTodo}
        />
      ) : (
        <Form omSubmit={addTodo} />
      )}
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          onDelete={deleteTodos}
          editTodo={handleEditTodo}
        />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
