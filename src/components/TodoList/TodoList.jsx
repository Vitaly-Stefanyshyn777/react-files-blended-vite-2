import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todos, onDelete }) => {
  return (
    <Grid>
      {todos.map((todo, i) => (
        <GridItem key={todo.id}>
          <TodoListItem todo={todo} i={i} deleteTodo={onDelete} />
        </GridItem>
      ))}
    </Grid>
  );
};
