import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const Blur = styled.div`
  height: 50px;
  width: 100vw;
  position: absolute;
  backdrop-filter: blur(10px);
  position: fixed;
  z-index: 2;
`;

const Container = styled.div`
  height: 50px;
  width: 100vw;
  background-color: black;
  opacity: 0.7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 3;
  box-shadow: 0px 0px 20px 0px white;

  @media (max-width: 400px) {
    /* position: sticky; */
  }
`;

const HomeBtn = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  :hover {
    cursor: pointer;
    background: linear-gradient(to right, #a55eea, #2d98da);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 400px) {
    font-size: 15px;
    margin-left: 10px;
  }
`;

const Title = styled.div`
  color: white;
`;

const RocketIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;

  @media (max-width: 400px) {
    display: none;
  }
`;

const TapBox = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tap = styled.div`
  margin-right: 50px;
  color: white;
  font-size: 20px;
  :hover {
    cursor: pointer;
    background: linear-gradient(to right, #a55eea, #2d98da);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 400px) {
    font-size: 13px;
    margin-right: 10px;
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
            <p>Rahee's</p>
            <p>Portfolio</p>
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
