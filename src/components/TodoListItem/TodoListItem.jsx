import { Text } from '..';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css';

export const TodoListItem = ({ todo, i, deleteTodo, selectTodo }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {i + 1}
      </Text>
      <Text>{todo.text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => deleteTodo(todo.id)}
      >
        <RiDeleteBinLine size={24} />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => selectTodo(todo)}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};
