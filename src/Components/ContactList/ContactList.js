import { useSelector } from 'react-redux';
import { useDeleteContactMutation } from 'redux/phonebook/phonebook-slice';
import {
  getFilter,
  getVisibleContacts,
} from 'redux/phonebook/phonebook-selectors';

import styles from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  const [deleteContact] = useDeleteContactMutation();
  const keyWord = useSelector(getFilter);

  const onDeleteContact = id => deleteContact(id);

  const filteredEl = getVisibleContacts(contacts, keyWord);

  return (
    <ul className={styles.contactList}>
      {filteredEl &&
        filteredEl.map(contact => (
          <li className={styles.contactList__item} key={contact.id}>
            {contact.name} {contact.phone}
            <button
              className={styles.contactList__button}
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Удалить
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
