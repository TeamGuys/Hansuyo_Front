import React from "react";
import "../App.css";

const LoginButton = ({ type, name, logo, image, click }) => {
  return (
    <button className={type} onClick={click}>
      {name}
      <img className={logo} src={image} alt="Logo" />
    </button>
  );
};

export default LoginButton;
