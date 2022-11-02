import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetail = (props) => {
  const { nombres, apellidos, correo, telefono, celular, direccion } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{nombres}</div>
          <div className="header">{apellidos}</div>
          <div className="description">{telefono}</div>
          <div className="description">{correo}</div>
          <div className="description">{telefono}</div>
          <div className="description">{celular}</div>
          <div className="description">{direccion}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
