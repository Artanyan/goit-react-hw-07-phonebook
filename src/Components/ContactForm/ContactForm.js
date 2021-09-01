import { useState } from 'react';
import { useCreateContactMutation } from 'redux/phonebook/phonebook-slice';

import styles from './ContactForm.module.css';

const ContactForm = ({ contacts }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [createContact] = useCreateContactMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const coincidence = contacts.find(item => item.name === name);
    if (coincidence) {
      alert(`${name} is already in contacts`);
      setName('');
      setPhone('');
      return;
    }

    createContact({ name, phone });

    setName('');
    setPhone('');
  };

  return (
    <form className={styles.contact__form} onSubmit={handleSubmit}>
      <label className={styles.label__form}>
        Name
        <input
          className={styles.contact__input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
        />
      </label>
      <label className={styles.label__form}>
        Number
        <input
          className={styles.contact__input}
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={styles.button__submit} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
