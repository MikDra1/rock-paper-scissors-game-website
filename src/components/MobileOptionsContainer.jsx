import styled from "styled-components";
import Option from "./Option";
import { useGame } from "../context/GameProvider";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 700px;
  margin-inline: auto;
  padding: 3rem 0;
  background-image: url("../images/bg-triangle.svg");
  background-repeat: no-repeat;
  background-position: top 70% left 50%;
  background-size: 70%;
  flex: 1;
  height: 100%;

  @media (max-width: 768px) {
    background-image: none;
    transform: translate(1rem);
    margin-top: 3rem;
  }

  @media (max-width: 450px) {
    transform: translate(-1rem);
  }
`;

function OptionsContainer() {
  const { setPick } = useGame();

  return (
    <Container>
      <Option
        color1="hsl(230, 89%, 62%)"
        color2="hsl(230, 89%, 65%)"
        color3="#3550d4"
        image="./images/icon-paper.svg"
        positionTop={2}
        positionLeft={10}
        onPick={() => setPick("paper")}
        scale={0.8}
        // position={'relatieve'}
      />
      <Option
        color1="hsl(39, 89%, 49%)"
        color2="hsl(40, 84%, 53%)"
        color3="#cb7f1a"
        image="./images/icon-scissors.svg"
        positionTop={2}
        positionLeft={50}
        onPick={() => setPick("scissors")}
        scale={0.8}
        // position={'relatieve'}
      />
      <Option
        color1="hsl(349, 71%, 52%)"
        color2="hsl(349, 70%, 56%)"
        color3="#a90f2b"
        image="./images/icon-rock.svg"
        positionTop={20}
        positionLeft={30}
        onPick={() => setPick("rock")}
        // position={'relatieve'}
        scale={0.8}
      />
    </Container>
  );
}

export default OptionsContainer;
