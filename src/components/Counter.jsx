import styled from "styled-components";
import { useGame } from "../context/GameProvider";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 55rem;
  margin-inline: auto;
  border: 1px solid #fff;
  padding: 1.5rem;
  border-radius: 0.75rem;

  @media (max-width: 700px) {
    padding: 1rem 1rem 1rem 1.5rem;
    margin-inline: 1rem;
    width: auto;
  }
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem 3rem;
  gap: 0.5rem;
  color: var(--dark-text);
  line-height: 1;

  @media (max-width: 700px) {
    padding: .75rem 2rem;
  }
`;

const TitleContainer = styled.div`
  line-height: 0.9;
  font-size: 1.5rem;
  color: #fff;

  
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

const ScoreNumber = styled.h2`
  font-size: 3.5rem;
`;

function Counter() {
  const { score } = useGame();

  return (
    <Container>
      <TitleContainer>
        <h2>ROCK</h2>
        <h2>PAPER</h2>
        <h2>SCISSORS</h2>
      </TitleContainer>
      <ScoreContainer>
        <h3>SCORE</h3>
        <ScoreNumber>{score}</ScoreNumber>
      </ScoreContainer>
    </Container>
  );
}

export default Counter;
