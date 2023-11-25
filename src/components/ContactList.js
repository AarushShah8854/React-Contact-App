import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const getId = (id) => {
    props.deleteContactHandler(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} getId={getId} />;
  });

  return (
    <div style={{ marginTop: "50px" }}>
      <div className="ui container" style={{ marginBottom: "20px" }}>
        <content className="ui header">Contact List</content>
        <Link to="/add">
          <button className="ui right floated button yellow">
            Add Contact
          </button>
        </Link>
      </div>
      <div className="ui divided list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
