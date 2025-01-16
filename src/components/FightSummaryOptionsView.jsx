/* eslint-disable react/prop-types */
import styled from "styled-components";
import Option from "./Option";
import { useGame } from "../context/GameProvider";

const BlackContainer = styled.div`
  background-color: #000;
  opacity: 0.2;
  width: 100%;
  height: 12.5vw;
  border-radius: 100vw;

  @media (max-width: 1150px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1150px) {
    gap: 2rem;
  }

  & h3 {
    color: white;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;

    @media (max-width: 1150px) {
      text-align: center;
      /* justify-self: flex-end; */
      /* align-self: flex-end; */
      font-size: 1.2rem;
    }

    @media (max-width: 400px) {
      font-size: 1rem;
    }

    @media (max-width: 1150px) {
      order: 2;
    }
  }
`;

function FightSummaryOptionsView({
  pick,
  computerChoice,
  winner,
  scale,
  children,
}) {
  const { isTablet } = useGame();

  return (
    <>
      <Wrapper>
        <h3>YOU PICKED</h3>
        <div>
          {pick === "paper" && (
            <Option
              option="paper"
              color1="hsl(230, 89%, 62%)"
              color2="hsl(230, 89%, 65%)"
              color3="#3550d4"
              image="./images/icon-paper.svg"
              scale={scale}
              position={"relative"}
              hasWon={winner === "You win"}
            />
          )}
          {pick === "rock" && (
            <Option
              option="rock"
              color1="hsl(349, 71%, 52%)"
              color2="hsl(349, 70%, 56%)"
              color3="#a90f2b"
              image="./images/icon-rock.svg"
              scale={scale}
              position={"relative"}
              hasWon={winner === "You win"}
            />
          )}
          {pick === "scissors" && (
            <Option
              option="scissors"
              color1="hsl(39, 89%, 49%)"
              color2="hsl(40, 84%, 53%)"
              color3="#cb7f1a"
              image="./images/icon-scissors.svg"
              scale={scale}
              position={"relative"}
              hasWon={winner === "You win"}
            />
          )}
        </div>
      </Wrapper>

      {children}

      <Wrapper>
        {isTablet ? (
          computerChoice ? (
            <h3>THE HOUSE PICKED</h3>
          ) : null
        ) : (
          <h3>THE HOUSE PICKED</h3>
        )}
        {computerChoice ? (
          <div>
            {computerChoice === "paper" && (
              <Option
                option="paper"
                color1="hsl(230, 89%, 62%)"
                color2="hsl(230, 89%, 65%)"
                color3="#3550d4"
                image="./images/icon-paper.svg"
                scale={scale}
                position={"relative"}
                hasWon={winner === "You lose"}
              />
            )}
            {computerChoice === "scissors" && (
              <Option
                option="scissors"
                color1="hsl(39, 89%, 49%)"
                color2="hsl(40, 84%, 53%)"
                color3="#cb7f1a"
                image="./images/icon-scissors.svg"
                scale={scale}
                position={"relative"}
                hasWon={winner === "You lose"}
              />
            )}
            {computerChoice === "rock" && (
              <Option
                option="rock"
                color1="hsl(349, 71%, 52%)"
                color2="hsl(349, 70%, 56%)"
                color3="#a90f2b"
                image="./images/icon-rock.svg"
                scale={scale}
                position={"relative"}
                hasWon={winner === "You lose"}
              />
            )}
          </div>
        ) : (
          <BlackContainer></BlackContainer>
        )}
      </Wrapper>
    </>
  );
}

export default FightSummaryOptionsView;
