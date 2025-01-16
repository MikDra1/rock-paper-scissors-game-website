/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import useScreenSize from "../hooks/useScreenSize";

const GameContext = createContext();

function GameProvider({ children }) {
  const [pick, setPick] = useState(null);
  const [score, setScore] = useState(0);

  const [isMobile, setIsMobile] = useState(null);
  const [isTablet, setIsTablet] = useState(null);
  const screenSize = useScreenSize();

  useEffect(
    function () {
      setIsMobile(screenSize.width <= 600);
      setIsTablet(screenSize.width <= 1150)
    },
    [screenSize.width]
  );

  function handleReset() {
    setPick(null);
  }

  return (
    <GameContext.Provider
      value={{
        pick,
        setPick,
        score,
        setScore,
        handleReset,
        isMobile,
        isTablet
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const context = useContext(GameContext);
  if (context === undefined)
    throw new Error("GameContext was used outside the GameProvider");
  return context;
}

export { GameProvider, useGame };
