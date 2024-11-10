import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map((todo, i) => (
        <GridItem key={todo.id}>
          <TodoListItem todo={todo} i={i} />
        </GridItem>
      ))}
    </Grid>
  );
};
