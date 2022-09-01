import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircle } from '@fortawesome/free-solid-svg-icons';

const Blur = styled.div`
  height: 80px;
  width: 100%;
  position: absolute;
  backdrop-filter: blur(5px);
  position: fixed;
  z-index: 2;
`;

const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: black;
  opacity: 0.7;
  font-size: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  z-index: 3;
  box-shadow: 0px 0px 20px 0px white;
`;

const ProgreBlurBar = styled.div`
  height: 5px;
  width: 1200px;
  background-color: white;
  position: absolute;
  margin-left: 20px;
  z-index: 5;
`;

const HouseIcon = styled.div`
  position: absolute;
  color: white;
  font-size: 30px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
  z-index: 4;
`;

const LandMark = styled.div`
  height: 80px;
  position: absolute;
`;

const CircleDotIcon = styled.div`
  position: absolute;
  z-index: 5;
  color: white;
  font-size: 20px;
`;

const Text = styled.div`
  color: white;
  z-index: 6;
  font-size: 20px;
`;

function NavBar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <>
      <Container>
        <HouseIcon>
          <FontAwesomeIcon icon={faHouse} />
        </HouseIcon>
        <LandMark>
          <Text style={{ marginLeft: '270px' }}>About Me</Text>
          <CircleDotIcon>
            <FontAwesomeIcon icon={faCircle} style={{ marginLeft: '300px' }} />
          </CircleDotIcon>
        </LandMark>
        <LandMark>
          <Text style={{ marginLeft: '585px' }}>Skills</Text>
          <CircleDotIcon>
            <FontAwesomeIcon icon={faCircle} style={{ marginLeft: '600px' }} />
          </CircleDotIcon>
        </LandMark>
        <LandMark>
          <Text style={{ marginLeft: '870px' }}>Projects</Text>
          <CircleDotIcon>
            <FontAwesomeIcon icon={faCircle} style={{ marginLeft: '900px' }} />
          </CircleDotIcon>
        </LandMark>
        <ProgreBlurBar></ProgreBlurBar>
      </Container>
      <Blur></Blur>
    </>
  );
}

export default NavBar;
