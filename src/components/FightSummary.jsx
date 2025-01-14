import styled from "styled-components";
import { useGame } from "../context/GameProvider";
import Option from "./Option";
import { determineWinner, getComputerChoice } from "../helpers";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 900px;
  margin-inline: auto;
  padding: 3rem 0;
  background-size: 70%;
  flex: 1;
  gap: 12rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  align-items: center;

  & h3 {
    color: white;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
  }
`;

const OptionSummary = styled(Option)`
  position: relative !important;
`;

function FightSummary() {
  const { pick } = useGame();
  const computerChoice = getComputerChoice();
  let winner = determineWinner(pick, computerChoice);

  return (
    <Container>
      <Wrapper>
        <h3>YOU PICKED</h3>
        <p>
          {pick === "paper" && (
            <OptionSummary
              option="paper"
              color1="hsl(230, 89%, 62%)"
              color2="hsl(230, 89%, 65%)"
              image="./images/icon-paper.svg"
              scale={1.5}
              position={"relative"}
            />
          )}
          {pick === "rock" && (
            <Option
              option="rock"
              color1="hsl(349, 71%, 52%)"
              color2="hsl(349, 70%, 56%)"
              image="./images/icon-rock.svg"
              scale={1.5}
              position={"relative"}
            />
          )}
          {pick === "scissors" && (
            <Option
              option="scissors"
              color1="hsl(39, 89%, 49%)"
              color2="hsl(40, 84%, 53%)"
              image="./images/icon-scissors.svg"
              scale={1.5}
              position={"relative"}
            />
          )}
        </p>
      </Wrapper>
      <Wrapper>
        <h3>THE HOUSE PICKED</h3>
        {winner || (
          <p>
            {computerChoice === "paper" && (
              <OptionSummary
                option="paper"
                color1="hsl(230, 89%, 62%)"
                color2="hsl(230, 89%, 65%)"
                image="./images/icon-paper.svg"
                scale={1.5}
                position={"relative"}
              />
            )}
            {computerChoice === "rock" && (
              <Option
                option="rock"
                color1="hsl(349, 71%, 52%)"
                color2="hsl(349, 70%, 56%)"
                image="./images/icon-rock.svg"
                scale={1.5}
                position={"relative"}
              />
            )}
            {computerChoice === "scissors" && (
              <Option
                option="scissors"
                color1="hsl(39, 89%, 49%)"
                color2="hsl(40, 84%, 53%)"
                image="./images/icon-scissors.svg"
                scale={1.5}
                position={"relative"}
              />
            )}
          </p>
        )}
      </Wrapper>
    </Container>
  );
}

export default FightSummary;
