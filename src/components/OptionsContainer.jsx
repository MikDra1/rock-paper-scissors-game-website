import { useGame } from "../context/GameProvider";
import MobileOptionsContainer from "./MobileOptionsContainer";
import DesktopOptionsContainer from "./DesktopOptionsContainer";

function OptionsContainer() {
  const { isMobile } = useGame();

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
