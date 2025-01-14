import styled from "styled-components";

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
`;

const TitleContainer = styled.div`
  line-height: .9;
  font-size: 1.5rem;
  color: #fff;
`;

const ScoreNumber = styled.h2`
  font-size: 3.5rem;
`

function Counter() {
  return (
    <Container>
      <TitleContainer>
        <h2>ROCK</h2>
        <h2>PAPER</h2>
        <h2>SCISSORS</h2>
      </TitleContainer>
      <ScoreContainer>
        <h3>SCORE</h3>
        <ScoreNumber>12</ScoreNumber>
      </ScoreContainer>
    </Container>
  );
}

export default Counter;
