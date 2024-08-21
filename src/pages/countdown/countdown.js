import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../../components/PageWrapper";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input";
import { useFullScreen } from "../../hooks/useFullScreen";
import { routes } from "../../router";

export const Countdown = () => {
  const { isFullScreen, toggleFullscreen } = useFullScreen();
  const navigate = useNavigate();
  const clockRef = useRef();

  const [timer, setTimer] = useState({
    mins: undefined,
    secs: undefined,
    isTimerActive: false,
  });

  const timerRef = useRef(null);

  useEffect(() => {
    if (window.confetti) {
      window.confetti.start(undefined, 2, 6);
    }

    return () => {
      window.confetti.stop();
    };
  }, []);

  const scheduleTimer = () => {
    timerRef.current = setInterval(function () {
      // We do this here so we get the latest state changes
      setTimer((prevState) => {
        const mins = Number(prevState.mins);
        const secs = Number(prevState.secs);

        if (secs === 1 && mins === 0) {
          clearInterval(timerRef.current);

          navigate(routes.countdown.cofetti);
        }

        if (secs === 0) {
          return { ...prevState, mins: mins - 1, secs: 59 };
        }

        return { ...prevState, secs: secs - 1 };
      });
    }, 1000);
  };

  const formatTime = (time) => {
    if (timer.isTimerActive) {
      return time.toString().padStart(2, "0");
    }

    return time;
  };

  const handleChangeTimer = (changeset) => {
    setTimer((prevState) => ({
      ...prevState,
      ...changeset,
    }));
  };

  const handleStartTimer = () => {
    if (timer.mins === undefined || timer.secs === undefined) {
      return alert("Please enter the mins and secs");
    }

    handleChangeTimer({ isTimerActive: true });

    scheduleTimer();
    clockRef.current.play();
  };

  const handleStopTimer = () => {
    handleChangeTimer({ isTimerActive: false });

    clearInterval(timerRef.current);
    clockRef.current.pause();
    clockRef.current.currentTime = 0;
  };

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
      <audio src="/audio/clock.mp3" ref={clockRef} loop />
      <div style={{ maxWidth: 700 }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", columnGap: 40, alignItems: "center" }}>
            <Input
              placeholder="00"
              value={formatTime(timer.mins)}
              onChange={(e) => handleChangeTimer({ mins: e.target.value })}
            />
            <span style={{ fontWeight: "bold", fontSize: 200 }}>:</span>
            <Input
              placeholder="00"
              value={formatTime(timer.secs)}
              onChange={(e) => handleChangeTimer({ secs: e.target.value })}
            />
          </div>
          <div style={{ marginTop: 20, columnGap: 10, display: "flex" }}>
            <Button
              onClick={timer.isTimerActive ? handleStopTimer : handleStartTimer}
            >
              {timer.isTimerActive ? "Stop" : "Start"}
            </Button>
            <Button onClick={toggleFullscreen}>
              {isFullScreen ? "Exit Fullscreen" : "Go Fullscreen"}
            </Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
