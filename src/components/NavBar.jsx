import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

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
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 3;
  box-shadow: 0px 0px 20px 0px white;
`;

const HomeBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  color: white;
`;

const RocketIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  /* background-color: blue; */
  color: white;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const TapBox = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
`;

const Tap = styled.div`
  cursor: pointer;
  margin-right: 50px;
  color: white;
  font-size: 30px;
  :hover {
    border-bottom: 1px solid white;
  }
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
        <HomeBtn
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          <RocketIcon>
            <FontAwesomeIcon icon={faRocket} />
          </RocketIcon>
          <Title>
            <p style={{ height: '20px', backgroundColor: '', margin: '3px' }}>Rahee's</p>
            <p style={{ height: '20px', backgroundColor: '', margin: '3px' }}>Portfolio</p>
          </Title>
        </HomeBtn>
        <TapBox>
          <Tap
            style={{ backgroundColor: '' }}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
              });
            }}
          >
            About Me
          </Tap>

          <Tap
            style={{ backgroundColor: '' }}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight * 3,
                behavior: 'smooth',
              });
            }}
          >
            Skills
          </Tap>

          <Tap
            style={{ backgroundColor: '' }}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight * 4,
                behavior: 'smooth',
              });
            }}
          >
            Projects
          </Tap>
        </TapBox>
      </Container>

      <Blur></Blur>
    </>
  );
}

export default NavBar;
