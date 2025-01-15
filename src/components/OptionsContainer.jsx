import styled from "styled-components";
import Option from "./Option";
import { useGame } from "../context/GameProvider";
import MobileOptionsContainer from "./MobileOptionsContainer";
import DesktopOptionsContainer from "./DesktopOptionsContainer";

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
  const {  isMobile } = useGame();

  return (
    <>
      {isMobile === true ? (
        <MobileOptionsContainer />
      ) : (
        <DesktopOptionsContainer />
      )}
    </>
  );
}

export default OptionsContainer;
