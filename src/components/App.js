import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuid } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEY)
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      : []
  );

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const deleteContactHandler = (id) => {
    const remainingContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(remainingContacts);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} deleteContactHandler={deleteContactHandler}/>}/>
        <Route path="add" element={<AddContact addContactHandler={addContactHandler}/>}/>
        <Route path="contact/:id" element={<ContactDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
