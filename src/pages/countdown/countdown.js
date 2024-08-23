import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PageWrapper } from "../../components/PageWrapper";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input";
import { useFullScreen } from "../../hooks/useFullScreen";
import { routes } from "../../router";

export const Countdown = () => {
  const { isFullScreen, toggleFullscreen } = useFullScreen();
  const navigate = useNavigate();
  const clockRef = useRef();
  const [searchParams] = useSearchParams();

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

  const stopClockSound = () => {
    clockRef.current.pause();
    clockRef.current.currentTime = 0;
  };

  const handleActionOnTimerEnd = () => {
    const timerType = searchParams.get("time-type");

    if (timerType === "regular") {
      handleChangeTimer({ secs: 0, mins: 0 });
      stopClockSound();

      return;
    }

    navigate(routes.countdown.cofetti);
  };

  const scheduleTimer = () => {
    timerRef.current = setInterval(function () {
      // We do this here so we get the latest state changes
      setTimer((prevState) => {
        const mins = Number(prevState.mins);
        const secs = Number(prevState.secs);

        if (secs === 1 && mins === 0) {
          clearInterval(timerRef.current);

          handleActionOnTimerEnd();
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

  const getInputTextColor = () => {
    const { mins, secs, isTimerActive } = timer;

    if (!isTimerActive || mins > 0) {
      return;
    }

    switch (Math.ceil(secs / 10)) {
      case 3:
        // From 21 to 30 secs
        return "#FFCDD2";
      case 2:
        // From 11 to 20 secs
        return "#E57373";
      case 1:
      case 0:
        // From 0 to 10 secs
        return "#B71C1C";
      default:
        return undefined;
    }
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
    stopClockSound();
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
              textColor={getInputTextColor()}
            />
            <span style={{ fontWeight: "bold", fontSize: 200 }}>:</span>
            <Input
              placeholder="00"
              value={formatTime(timer.secs)}
              onChange={(e) => handleChangeTimer({ secs: e.target.value })}
              textColor={getInputTextColor()}
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
