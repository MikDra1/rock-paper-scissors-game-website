/* eslint-disable react/prop-types */

import styled from "styled-components";

// const Container = styled.div`
//   border: 10px solid ${(props) => props.color};
// `;

// Styled component for the coin
const Container = styled.div`
  position: absolute;
  background-color: black;
  border-radius: 50%;
  padding: 1.5rem;
  top: ${(props) => props.positionTop + "vh"};
  left: ${(props) => props.positionLeft + "%"};
  background: linear-gradient(${(props) => props?.color2}, ${(props) => props?.color1});
  box-shadow: inset 0em -0.5em ${(props) => props?.color1};
  cursor: pointer;
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

function Option({ option, color1, color2, image, positionTop, positionLeft }) {
  return (
    <Container
      color1={color1}
      color2={color2}
      positionTop={positionTop}
      positionLeft={positionLeft}
    >
      <ImageContainer>
        <Image src={image} alt={option} />
      </ImageContainer>
    </Container>
  );
}

export default Option;
