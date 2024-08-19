import React from "react";
import { PageWrapper } from "../../components/PageWrapper";

export const FinalInstruction = () => {
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
        <p>
          We obtained a mysterious letter, hinting at the Manuscript's location
          and invite you to embark on this quest. This letter will now be given
          to you.
        </p>
        <p style={{ textAlign: "end" }}>Goodluck!</p>
      </div>
    </PageWrapper>
  );
};
