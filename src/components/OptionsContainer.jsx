import styled from "styled-components";
import Option from "./Option";

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
`;

function OptionsContainer() {
  return (
    <Container>
      <Option
        option="paper"
        color1="hsl(230, 89%, 62%)"
        color2="hsl(230, 89%, 65%)"
        image="./images/icon-paper.svg"
        positionTop={2}
        positionLeft={10}
      />
      <Option
        option="scissors"
        color1="hsl(39, 89%, 49%)"
        color2="hsl(40, 84%, 53%)"
        image="./images/icon-scissors.svg"
        positionTop={2}
        positionLeft={65}
      />
      <Option
        option="rock"
        color1="hsl(349, 71%, 52%)"
        color2="hsl(349, 70%, 56%)"
        image="./images/icon-rock.svg"
        positionTop={40}
        positionLeft={37}
      />
    </Container>
  );
}

export default OptionsContainer;
