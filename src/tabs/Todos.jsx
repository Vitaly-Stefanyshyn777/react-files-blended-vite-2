import { Text } from 'components';
import { nanoid } from 'nanoid';
import { Form } from 'components';


export const Todos = () => {
  const addTodo = (text) => {console.log(text)}

  return <><Form omSubmit ={addTodo}/><Text textAlign="center">There are no any todos ...</Text></>;
};
