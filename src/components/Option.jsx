/* eslint-disable react/prop-types */

import styled from "styled-components";

// const Container = styled.div`
//   border: 10px solid ${(props) => props.color};
// `;

// Styled component for the coin
const Container = styled.div`
  position: ${(props) => props?.position || "absolute"};
  background-color: black;
  border-radius: 50%;
  padding: 1.5rem;
  top: ${(props) => props.positionTop + "vh"};
  left: ${(props) => props.positionLeft + "%"};
  background: linear-gradient(
    ${(props) => props?.color2},
    ${(props) => props?.color1}
  );
  box-shadow: inset 0em -0.5em ${(props) => props?.color3};
  cursor: pointer;
  scale: ${(props) => props?.scale};
  height: fit-content;

  @media (max-width: 400px) {
    scale: .7;
  }

  @media (max-width: 360px) {
    scale: .6;
  }

`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  fill: #000;
  scale: 1.4;
`;

const ImageContainer = styled.div`
  background-color: hsl(0, 12%, 93%);
  border-radius: 50%;
  padding: 3rem;
  box-shadow: inset 0em 0.5em #cec0c0;
`;

const Circle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: -1;
  transition: all 0.3s ease-in-out;
`;

const Circle1 = styled(Circle)`
  width: 17rem;
  height: 17rem;
  background-color: rgba(255, 255, 255, 0.06);
  animation: smoothGrowing1 0.25s ease-in-out;
`;

const Circle2 = styled(Circle)`
  width: 21rem;
  height: 21rem;
  background-color: rgba(255, 255, 255, 0.03);
  animation: smoothGrowing2 0.5s ease-in-out;
`;

const Circle3 = styled(Circle)`
  width: 25rem;
  height: 25rem;
  background-color: rgba(255, 255, 255, 0.01);
  animation: smoothGrowing3 0.75s ease-in-out;
`;

function Option({
  color1,
  color2,
  color3,
  image,
  positionTop,
  positionLeft,
  scale,
  position,
  onPick,
  hasWon,
}) {
  return (
    <Container
      color1={color1}
      color2={color2}
      color3={color3}
      positionTop={positionTop}
      positionLeft={positionLeft}
      scale={scale}
      onClick={onPick}
      position={position}
    >
      {hasWon && (
        <>
          <Circle1 />
          <Circle2 />
          <Circle3 />
        </>
      )}
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
    </Container>
  );
}

export default Option;
