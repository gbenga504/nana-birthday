import React from "react";

export const PageWrapper = ({ children, style }) => {
  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
