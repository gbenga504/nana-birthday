import { useEffect, useState } from "react";

export const useFullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(
    !!document.fullscreenElement
  );

  useEffect(() => {
    function detectFullScreenChange() {
      setIsFullScreen(!!document.fullscreenElement);
    }

    document.documentElement.addEventListener(
      "fullscreenchange",
      detectFullScreenChange
    );

    return () => {
      document.documentElement.removeEventListener(
        "fullscreenchange",
        detectFullScreenChange
      );
    };
  }, []);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  return { isFullScreen, toggleFullscreen };
};
