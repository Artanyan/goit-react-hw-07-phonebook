import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/phonebook/phonebook-actions';
import { getFilter } from 'redux/phonebook/phonebook-selectors';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeValue = e => dispatch(changeFilter(e.target.value));

  return (
    <div className={styles.filter__wrapper}>
      <label className={styles.filter__label}>
        Find contacts by name
        <input
          className={styles.filter__input}
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeValue}
        />
      </label>
    </div>
  );
};

export default Filter;
