import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  height: 200px;
  width: 100%;
  background-color: #fadebf;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;

const Blank = styled.div`
  height: 30px;
  width: 30px;
  background-color: turquoise;
`;

const AnglesUpIcon = styled.div`
  height: 30px;
  width: 30px;
  background-color: turquoise;
  color: gray;
  display: flex;
  padding: 10px;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const ThanksSentence = styled.div`
  background-color: #407be0;
  font-size: 30px;
  color: gray;
`;

function Footer() {
  return (
    <Container>
      {/* <Blank></Blank> */}
      <ThanksSentence>Thanks for viting my portfolio site</ThanksSentence>
      <AnglesUpIcon>
        <FontAwesomeIcon icon={faAnglesUp} />
      </AnglesUpIcon>
    </Container>
  );
}

export default Footer;
