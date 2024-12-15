import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          <p><strong>Email:</strong> {contact.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
