import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000cf;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media (min-width: 400px) {
    position: fixed;
    top: 0;
    left: 0;
  }

  @media (max-width: 400px) {
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;

const Wrapper = styled.div`
  height: 150px;
  display: grid;
  place-items: center;
`;

const Typing = styled.div`
  @media (max-width: 400px) {
    width: 27ch;
    animation: typing 3s steps(27), blink 0.3s step-end infinite alternate;
    font-size: 15px;
  }
  color: white;
  width: 27ch;
  animation: typing 3s steps(27), blink 0.3s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 2em;

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

function Modal({ offModal }) {
  return (
    <Container onClick={offModal}>
      <Wrapper>
        <Typing>Thanks for visiting my portfolio site!</Typing>
      </Wrapper>
    </Container>
  );
}

export default Modal;
