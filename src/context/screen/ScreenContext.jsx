// fullScreenContext.js
import React, { createContext, useContext, useRef, useState } from 'react';

const FullScreenContext = createContext();

export const useFullScreen = () => useContext(FullScreenContext);

export const FullScreenProvider = ({ children }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const elementRef = useRef(null);

  const enterFullScreen = () => {
    if (elementRef.current) {
      if (elementRef.current.requestFullscreen) {
        elementRef.current.requestFullscreen();
      } else if (elementRef.current.webkitRequestFullscreen) {
        elementRef.current.webkitRequestFullscreen();
      }
      setIsFullScreen(true);
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    setIsFullScreen(false);
  };

  const value = {
    isFullScreen,
    enterFullScreen,
    exitFullScreen
  };

  return (
    <FullScreenContext.Provider value={value}>
      <body ref={elementRef}>
        {children}
      </body>
    </FullScreenContext.Provider>
  );
};
