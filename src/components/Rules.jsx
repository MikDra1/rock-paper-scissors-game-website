import { useState } from "react";
import styled from "styled-components";
import rules from '../../public/images/image-rules.svg';

const Container = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 2rem;

  @media (max-width: 700px) {
    right: 50vw;
    transform: translateX(50%);
  }
`;

const Modal = styled.div`
  background-color: #fff;
  width: fit-content;
  height: fit-content;
  position: absolute;
  padding: 3rem;
  border-radius: 0.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 700px) {
   padding: 1rem;
   width: 80vw;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const RulesButton = styled.button`
  border-radius: 0.5rem;
  background-color: transparent;
  padding: .55rem 2.5rem;
  border: none;
  cursor: pointer;
  border: 1px solid #fff;
  color: white;

  @media (max-width: 700px) {
    
  }
`;

function Rules() {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
    {showRules && <Overlay  onClick={() => setShowRules(false)} />}
      {showRules && (
        <Modal>
          <img src={rules} alt="" />
        </Modal>
      )}
      <Container>
        <RulesButton onClick={() => setShowRules(true)}>RULES</RulesButton>
      </Container>
    </>
  );
}

export default Rules;
