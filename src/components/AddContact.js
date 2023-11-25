import React from "react";
import { Link } from "react-router-dom";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();

    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are mandatory!!");
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className="ui main">
        <div className="ui container" style={{ marginTop: "50px" }}>
          <content className="ui header">Add Contact</content>
          <Link to="/">
            <button className="ui right floated button green">Home</button>
          </Link>
        </div>

        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button yellow" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
