/* eslint-disable react/prop-types */
import styled from "styled-components";
import FightSummaryOptionsView from "./FightSummaryOptionsView";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 100rem;
  margin-inline: auto;
  padding: 3rem 0;
  background-size: 70%;
  flex: 1;
  gap: 12rem;
`;

const WinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & h2 {
    font-size: 4rem;
    text-transform: uppercase;
    color: white;
  }

  & button {
    padding: 0.75rem 4rem;
    cursor: pointer;
    border: none;
    background-color: #fff;
    border-radius: 0.3rem;
    letter-spacing: 0.1rem;
    font-size: 1.2rem;
    transition: all 0.3s;

    &:hover {
      color: hsl(39, 89%, 49%);
    }
  }
`;

function FightSummaryDesktop({ winner, pick, handleReset, computerChoice }) {
  return (
    <Container>
      {/* <Wrapper>
        <h3>YOU PICKED</h3>
        <div>
          {pick === "paper" && (
            <OptionSummary
              option="paper"
              color1="hsl(230, 89%, 62%)"
              color2="hsl(230, 89%, 65%)"
              color3="#3550d4"
              image="./images/icon-paper.svg"
              scale={1.5}
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
              scale={1.5}
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
              scale={1.5}
              position={"relative"}
              hasWon={winner === "You win"}
            />
          )}
        </div>
      </Wrapper> */}

      <FightSummaryOptionsView
        scale={1.5}
        winner={winner}
        pick={pick}
        computerChoice={computerChoice}
      >
        {winner && (
          <WinnerContainer>
            <h2>{winner}</h2>
            <button onClick={handleReset}>PLAY AGAIN</button>
          </WinnerContainer>
        )}
      </FightSummaryOptionsView>
      {/* <Wrapper>
        <h3>THE HOUSE PICKED</h3>

        {computerChoice ? (
          <div>
            {computerChoice === "paper" && (
              <OptionSummary
                option="paper"
                color1="hsl(230, 89%, 62%)"
                color2="hsl(230, 89%, 65%)"
                color3="#3550d4"
                image="./images/icon-paper.svg"
                scale={1.5}
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
                scale={1.5}
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
                scale={1.5}
                position={"relative"}
                hasWon={winner === "You lose"}
              />
            )}
          </div>
        ) : (
          <BlackContainer></BlackContainer>
        )}
      </Wrapper> */}
    </Container>
  );
}

export default FightSummaryDesktop;
