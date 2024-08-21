import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../../components/PageWrapper";

import "./treasureHuntGame.css";
import { routes } from "../../router";

export const Rules = () => {
  const audioRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (audioRef.current) {
      function gotoNextPage() {
        navigate(routes.game.finalInstruction);
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
      <audio src="/audio/rules-voice.mp3" ref={audioRef} autoPlay />
      <div style={{ maxWidth: 700 }}>
        <p style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
          The Lost Manuscript 🗞
        </p>
        <p className="disappearing-text">The following rules apply:</p>
        <ul style={{ padding: "0px 25px" }}>
          <li className="disappearing-text">
            You can ask for hints, but each hint attracts a deduction of 1 point
          </li>
          <li className="disappearing-text">
            Do not remove or detach any of the hints so other teams can use them
          </li>
        </ul>
      </div>
    </PageWrapper>
  );
};
