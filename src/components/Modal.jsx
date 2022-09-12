import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #000000cf;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 150px;
  display: grid;
  place-items: center;
`;

const Typing = styled.div`
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
