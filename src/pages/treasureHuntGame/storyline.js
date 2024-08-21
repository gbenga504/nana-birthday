import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../../components/PageWrapper";

import "./treasureHuntGame.css";
import { routes } from "../../router";

export const Storyline = () => {
  const audioRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (audioRef.current) {
      function gotoNextPage() {
        navigate(routes.game.rules);
      }

      const audio = audioRef.current;

      audio.addEventListener("ended", gotoNextPage);

      return () => {
        audio.removeEventListener("ended", gotoNextPage);
      };
    }
  }, [navigate]);

  return (
    <PageWrapper
      style={{
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30,
        display: "flex",
        flexDirection: "column",
      }}
      gameAudio={{ isActive: true, volume: 0.05 }}
    >
      <audio src="/audio/storyline-voice.mp3" ref={audioRef} autoPlay />
      <div style={{ maxWidth: 700 }}>
        <p style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
          The Lost Manuscript 🗞
        </p>
        <p className="disappearing-text">
          You are descendants of a renowned explorer, Professor Elara Thorne,
          who vanished mysteriously while searching for a lost civilization in
          the heart of the Amazon rainforest. Legend has it that she discovered
          a hidden manuscript detailing the location of an ancient, priceless
          artifact.
        </p>
        <p className="disappearing-text">
          Before her disappearance, she managed to leave behind a series of
          cryptic clues, scattered across your hometown. Your mission: to follow
          these clues, decipher her enigmatic messages, and ultimately uncover
          the lost manuscript.
        </p>
      </div>
    </PageWrapper>
  );
};
