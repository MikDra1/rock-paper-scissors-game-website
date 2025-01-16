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
  flex: 1;
  gap: 12rem;

  @media (max-width: 1150px) {
    flex-direction: column;
    justify-content: start;
    gap: 4rem;
    padding: 1rem 0;
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  gap: 0rem;
  align-items: center;
  justify-content: center;
`;

const WinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  & h2 {
    font-size: 3rem;
    text-transform: uppercase;
    color: white;
  }

  & button {
    padding: 0.5rem 3rem;
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

function FightSummaryMobile({ winner, pick, handleReset, computerChoice }) {
  return (
    <Container>
      <MobileWrapper>
        <FightSummaryOptionsView
          winner={winner}
          pick={pick}
          computerChoice={computerChoice}
          scale={0.8}
        />
      </MobileWrapper>
      {winner && (
        <WinnerContainer>
          <h2>{winner}</h2>
          <button onClick={handleReset}>PLAY AGAIN</button>
        </WinnerContainer>
      )}
    </Container>
  );
}

export default FightSummaryMobile;
