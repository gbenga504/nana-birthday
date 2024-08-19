import React from "react";

export const Button = ({ children }) => {
  return (
    <button
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
      }}
    >
      {children}
    </button>
  );
};
