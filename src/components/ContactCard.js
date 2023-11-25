import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <div className="right floated content" style={{ marginRight: "20px" }}>
        <i style={{cursor:"pointer"}}
          className="trash alternate icon red"
          onClick={() => {
            props.getId(id);
          }}
        ></i>
      </div>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to="/contact/${id}" state={props.contact}>
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
