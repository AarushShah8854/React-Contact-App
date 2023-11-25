import React from "react";
import { useLocation } from "react-router-dom";
import levi from "../images/levi.jpg";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
  const location = useLocation();
  const data = location.state;
  return (
    <div className="ui centered card" style={{ marginTop: "70px" }}>
      <div className="image">
        <img src={levi} alt="user" />
      </div>
      <div className="content">
        <content className="header">{data.name}</content>
        <div className="description">{data.email}</div>
      </div>

      <Link to="/">
        <button className="ui fluid button yellow">Back to Contact List</button>
      </Link>
    </div>
  );
};

export default ContactDetail;
