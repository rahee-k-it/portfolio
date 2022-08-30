import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircle } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: white;
  font-size: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProgressBar = styled.div`
  height: 5px;
  width: 1200px;
  background-color: #4b7bec;
  position: relative;
  margin-left: 20px;
`;

const HouseIcon = styled.div`
  position: absolute;
  z-index: 1;
  color: #4b7bec;
  font-size: 50px;
  margin-left: 10px;
`;

const CircleDotIcon = styled.div`
  position: absolute;
  z-index: 1;
  color: #4b7bec;
  font-size: 20px;
`;

function NavBar() {
  return (
    <Container>
      <HouseIcon>
        <FontAwesomeIcon icon={faHouse} />
      </HouseIcon>
      <CircleDotIcon>
        <FontAwesomeIcon icon={faCircle} style={{ marginLeft: '300px' }} />
      </CircleDotIcon>
      <CircleDotIcon>
        <FontAwesomeIcon icon={faCircle} style={{ marginLeft: '600px' }} />
      </CircleDotIcon>
      <CircleDotIcon>
        <FontAwesomeIcon icon={faCircle} style={{ marginLeft: '900px' }} />
      </CircleDotIcon>
      <ProgressBar></ProgressBar>
    </Container>
  );
}

export default NavBar;
