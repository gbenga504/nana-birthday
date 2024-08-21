import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

export const Button = ({ children, to, onClick, ...rest }) => {
  const Element = to ? Link : "button";

  return (
    <Element className="button" to={to} onClick={onClick}>
      {children}
    </Element>
  );
};
