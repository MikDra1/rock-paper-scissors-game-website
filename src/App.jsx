import styled from "styled-components";
import Counter from "./components/Counter";

const Container = styled.div`
  background: radial-gradient(circle at top, hsl(214, 47%, 23%),hsl(237, 49%, 15%));
  min-height: 100vh;

  padding-block: 3rem;
`;

function App() {
  return (
    <Container>
      <Counter />
    </Container>
  );
}

export default App;
