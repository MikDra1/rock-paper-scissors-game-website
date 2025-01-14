import styled from "styled-components";

const Container = styled.div`
  background: radial-gradient(circle at top, hsl(214, 47%, 23%),hsl(237, 49%, 15%));
  min-height: 100vh;
`;

function App() {
  return <Container>Hello World!</Container>;
}

export default App;
