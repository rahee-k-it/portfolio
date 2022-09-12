import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';

const Container = styled.div`
  height: 15em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #d9bdbd;
  padding-bottom: 20px;
  background-color: black;
`;

const ClickMe = styled.div`
  cursor: pointer;
  border-radius: 15px;
  padding: 10px;
  font-size: 1em;
  background-color: gray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  color: white;
  padding-left: 10px;
`;

function Footer() {
  let [modal, setModal] = useState(false);
  const offModal = (e) => {
    if (e.currentTarget === e.target) {
      setModal(false);
    }
  };
  return (
    <Container>
      <ClickMe
        onClick={() => {
          setModal(!modal);
        }}
      >
        Click Me
        <Icon>
          <FontAwesomeIcon icon={faFaceSmile} />
        </Icon>
      </ClickMe>
      {
        modal == true ? <Modal offModal={offModal} /> : null //기계역할
      }
    </Container>
  );
}

export default Footer;
