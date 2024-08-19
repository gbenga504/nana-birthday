import React from "react";
import { PageWrapper } from "../../components/PageWrapper";
import { Button } from "../../components/Button";
import { routes } from "../../router";

export const TreasureHuntGame = () => {
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

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
        <Button to={routes.game.storyline}>Start</Button>
        <Button onClick={toggleFullscreen}>Fullscreen</Button>
      </div>
    </PageWrapper>
  );
};
