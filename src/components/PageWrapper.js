import React, { useEffect, useRef } from "react";

export const PageWrapper = ({ children, gameAudio, style }) => {
  const backgroundAudioRef = useRef();

  useEffect(() => {
    if (backgroundAudioRef.current && gameAudio?.isActive) {
      backgroundAudioRef.current.volume = gameAudio.volume ?? 1;
    }
  }, [gameAudio]);

  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        ...style,
      }}
    >
      {gameAudio?.isActive && (
        <audio src="/audio/game.mp3" autoPlay loop ref={backgroundAudioRef} />
      )}
      {children}
    </div>
  );
};
