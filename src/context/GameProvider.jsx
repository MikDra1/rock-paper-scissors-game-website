/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { createContext } from "react";

const GameContext = createContext();

function GameProvider({ children }) {
  const [pick, setPick] = useState(null);
  const [score, setScore] = useState(0);

  return (
    <GameContext.Provider
      value={{
        pick,
        setPick,
        score,
        setScore,
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
