import styled from "styled-components";
import Counter from "./components/Counter";
import OptionsContainer from "./components/OptionsContainer";
import Rules from "./components/Rules";
import { useGame } from "./context/GameProvider";
import FightSummary from "./components/FightSummary";

const Container = styled.div`
  background: radial-gradient(circle at top, hsl(214, 47%, 23%),hsl(237, 49%, 15%));
  min-height: 100vh;

  padding-block: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function App() {

  const { pick } = useGame();

  return (
    <Container>
      <Counter />
      {pick ? <FightSummary /> : <OptionsContainer />}
      <Rules />
    </Container>
  );
}

export default App;
