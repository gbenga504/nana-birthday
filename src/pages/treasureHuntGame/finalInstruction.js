import React, { useEffect, useRef, useState } from "react";
import { PageWrapper } from "../../components/PageWrapper";

import "./treasureHuntGame.css";

export const FinalInstruction = () => {
  const audioRef = useRef();
  const [backgrounAudioVolume, setBackgroundAudioVolume] = useState(0.05);

  useEffect(() => {
    if (audioRef.current) {
      function increaseBgAudioVolume() {
        setBackgroundAudioVolume(1);
      }

      const audio = audioRef.current;

      audio.addEventListener("ended", increaseBgAudioVolume);

      return () => {
        audio.removeEventListener("ended", increaseBgAudioVolume);
      };
    }
  }, []);

  return (
    <PageWrapper
      style={{
        alignItems: "center",
        justifyContent: "center",
        fontSize: 30,
        display: "flex",
        flexDirection: "column",
      }}
      gameAudio={{ isActive: true, volume: backgrounAudioVolume }}
    >
      <audio src="/audio/final-instruction-voice.mp3" autoPlay ref={audioRef} />
      <div style={{ maxWidth: 700 }}>
        <p style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
          The Lost Manuscript 🗞
        </p>
        <p className="disappearing-text">
          We obtained a mysterious letter, hinting at the Manuscript's location
          and invite you to embark on this quest. This letter will now be given
          to you.
        </p>
        <p className="disappearing-text" style={{ textAlign: "end" }}>
          Goodluck!
        </p>
      </div>
    </PageWrapper>
  );
};
