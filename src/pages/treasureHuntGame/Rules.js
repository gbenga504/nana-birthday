import React from "react";
import { PageWrapper } from "../../components/PageWrapper";

export const Rules = () => {
  return (
    <PageWrapper
      style={{
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ maxWidth: 700 }}>
        <p style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
          The Lost Manuscript 🗞
        </p>
        <p>The following rules apply:</p>
        <ul style={{ padding: "0px 25px" }}>
          <li>
            You can ask for hints, but each hint attracts a deduction of 1 point
          </li>
          <li>
            Do not remove or detach any of the hints so they can be used by
            other teams
          </li>
        </ul>
      </div>
    </PageWrapper>
  );
};
