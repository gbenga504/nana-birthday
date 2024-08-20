import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ children, to, onClick, ...rest }) => {
  const Element = to ? Link : "button";

  return (
    <Element
      style={{
        background: "#fff",
        border: 0,
        outline: "none",
        padding: "15px 40px",
        borderRadius: 5,
        cursor: "pointer",
        fontWeight: 500,
        fontFamily: "Roboto Slab",
        minHeight: 30,
        minWidth: 40,
        fontSize: 18,
        textDecoration: "none",
        color: "#333",
      }}
      to={to}
      onClick={onClick}
    >
      {children}
    </Element>
  );
};
