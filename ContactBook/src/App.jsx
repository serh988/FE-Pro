import React, { useState, useEffect } from 'react';
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h1>Contact Book</h1>
      <AddContactForm onAddContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
