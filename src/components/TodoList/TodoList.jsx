import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todos, onDelete, editTodo }) => {
  return (
    <Grid>
      {todos.map((todo, i) => (
        <GridItem key={todo.id}>
          <TodoListItem
            todo={todo}
            i={i}
            deleteTodo={onDelete}
            selectTodo={editTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
