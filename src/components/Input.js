import React from "react";

export const Input = (props) => {
  return (
    <input
      {...props}
      style={{
        border: "1px solid transparent",
        borderRadius: 5,
        background: "#000",
        height: 500,
        width: 500,
        color: "#fff",
        fontSize: 400,
        textAlign: "center",
        outline: "none",
        fontWeight: "bold",
      }}
    />
  );
};
