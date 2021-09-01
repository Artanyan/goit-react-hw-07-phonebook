import { useFetchContactsQuery } from './redux/phonebook/phonebook-slice';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';

import './App.css';

const App = () => {
  const { data, isFetching } = useFetchContactsQuery();
  return (
    <div className="App">
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={data} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={data} loading={isFetching} />
      </div>
    </div>
  );
};

export default App;
