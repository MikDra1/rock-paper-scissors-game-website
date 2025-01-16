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
    </Container>
  );
}

export default FightSummaryDesktop;
