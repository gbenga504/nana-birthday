import React from "react";
import { PageWrapper } from "../../components/PageWrapper";
import { Button } from "../../components/Button/Button";
import { routes } from "../../router";
import { useFullScreen } from "../../hooks/useFullScreen";

export const TreasureHuntGame = () => {
  const { isFullScreen, toggleFullscreen } = useFullScreen();

  return (
    <PageWrapper
      style={{
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 60,
        display: "flex",
        flexDirection: "column",
      }}
      gameAudio={{ isActive: true }}
    >
      <span>The Lost Manuscript 🗞</span>
      <div style={{ columnGap: 10, display: "flex" }}>
        <Button to={routes.game.storyline}>Start</Button>
        <Button onClick={toggleFullscreen}>
          {isFullScreen ? "Exit Fullscreen" : "Go Fullscreen"}
        </Button>
      </div>
    </PageWrapper>
  );
};
