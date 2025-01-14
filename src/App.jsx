import styled from "styled-components";
import Counter from "./components/Counter";
import OptionsContainer from "./components/OptionsContainer";

const Container = styled.div`
  background: radial-gradient(circle at top, hsl(214, 47%, 23%),hsl(237, 49%, 15%));
  min-height: 100vh;

  padding-block: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function App() {
  return (
    <Container>
      <Counter />
      <OptionsContainer />
    </Container>
  );
}

export default App;
