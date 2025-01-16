/* eslint-disable react/prop-types */
import { determineWinner, getComputerChoice } from "../helpers";
import { useEffect, useState } from "react";
import { useGame } from "../context/GameProvider";
import FightSummaryDesktop from "./FightSummaryDesktop";
import FightSummaryMobile from "./FightSummaryMobile";

function FightSummary({ pick }) {
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState(null);
  const [hasScored, setHasScored] = useState(false);
  const [hasGeneratedComputerChoice, setHasGeneratedComputerChoice] =
    useState(false);
  const { score, setScore, handleReset, isTablet } = useGame();

  console.log(computerChoice);

  function handleChangeComputerChoice(choice) {
    setComputerChoice(choice);
  }

  if (computerChoice && !hasGeneratedComputerChoice) {
    setTimeout(() => {
      console.log(pick, computerChoice);

      setWinner(determineWinner(pick, computerChoice));
      setHasGeneratedComputerChoice(true);
    }, 500);
  }

  if (winner && !hasScored) {
    if (winner === "You win") {
      setScore(score + 1);
      setHasScored(true); // Mark as scored to prevent further updates
    }
  }

  useEffect(() => {
    async function handleGame() {
      await getComputerChoice().then((choice) => {
        handleChangeComputerChoice(choice); // Store the result in state
        console.log(computerChoice);
      });
    }

    handleGame();
  }, [pick, setWinner]);

  return (
    <>
      {isTablet ? (
        <FightSummaryMobile
          winner={winner}
          pick={pick}
          handleReset={handleReset}
          computerChoice={computerChoice}
        />
      ) : (
        <FightSummaryDesktop
          winner={winner}
          pick={pick}
          handleReset={handleReset}
          computerChoice={computerChoice}
        />
      )}
    </>
  );
}

export default FightSummary;
