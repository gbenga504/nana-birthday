import React from "react";
import { PageWrapper } from "../../components/PageWrapper";
import { Button } from "../../components/Button";

export const TreasureHuntGame = () => {
  return (
    <PageWrapper
      style={{
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 50,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span>The Lost Manuscript 🗞</span>
      <div style={{ columnGap: 10, display: "flex" }}>
        <Button>Start</Button>
        <Button>Fullscreen</Button>
      </div>
    </PageWrapper>
  );
};
