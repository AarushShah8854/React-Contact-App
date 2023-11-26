import React, {useRef} from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const inputEl = useRef("");
  const getId = (id) => {
    props.deleteContactHandler(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} getId={getId} />;
  });

  const getSearchTerm = () => {
    props.searchHandler(inputEl.current.value);
  };

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
      <div className="ui icon input fluid" style={{margin:"20px"}}>
        <input 
        ref={inputEl}
        type="text" 
        placeholder="Search..." 
        value={props.term}
        onChange={getSearchTerm}/>
        <i className="search icon"></i>
      </div>
      <div className="ui divided list">{renderContactList.length > 1 ? renderContactList: "No Contacts Found"}</div>
    </div>
  );
};

export default ContactList;
