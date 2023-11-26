import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuid } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactDetail from "./ContactDetail";
import api from "../api/contacts";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    // localStorage.getItem(LOCAL_STORAGE_KEY)
    //   ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //Retrieve Contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  const addContactHandler = async (contact) => {
    const request = { id: uuid(), ...contact };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  const deleteContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);

    const remainingContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(remainingContacts);
  };

  const searchHandler = (searchLetters) => {
    setSearchTerm(searchLetters);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ContactList
              contacts={searchTerm.length < 1 ? contacts : searchResults}
              deleteContactHandler={deleteContactHandler}
              term={searchTerm}
              searchHandler={searchHandler}
            />
          }
        />
        <Route
          path="add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route path="contact/:id" element={<ContactDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
