import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

export const Form = ({omSubmit}) => {
  const handelSumbit = (e) => {
    e.preventDefault();
    const value = e.target.search.value.trim()
  if(value === ''){
    return;
  }

  omSubmit(value);
  e.target.reset()
}

  return <form className={style.form} onSubmit={handelSumbit}> 
  <button className={style.button} type="submit">
    <FiSearch size="16px" />
  </button>

  <input
    className={style.input}
    placeholder="What do you want to write?"
    name="search"
    required
    autoFocus
  />
</form>;
  
};
