import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Title = styled.div`
  font-weight: 900;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isShowing }) => (isShowing ? '1' : '0')};
  transition: opacity 1s ease-in-out;
  height: 80px;
  width: 250px;
  background-color: #1cb155;
  font-size: 50px;
  z-index: 1;

  @media (max-width: 400px) {
    height: 40px;
    width: 150px;
    font-weight: 900;
    font-size: 30px;
    margin: 50px 0px 10px 0px;
  }
`;

const ContentBox = styled.div`
  opacity: ${({ isShowing }) => (isShowing ? '1' : '0')};
  transition: opacity 3s ease-in-out;
  height: 400px;
  width: 1100px;
  background-color: #ffffff;
  margin: 60px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 0px 35px 5px gray;

  @media (max-width: 400px) {
    height: 450px;
    width: 300px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0px;
  }
`;

const Image = styled.div`
  height: 150px;
  width: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src});
  background-position: center;
  margin: 30px;
  transition: 0.1s linear;
  :hover {
    height: 160px;
    width: 160px;
  }

  @media (max-width: 400px) {
    height: 90px;
    width: 90px;
    :hover {
      height: 110px;
      width: 110px;
    }
  }
`;

function Skills() {
  const [target, setTarget] = useState(null);
  const [opacity, setOpacity] = useState(false);
  const handleIntersection = ([entry], observer) => {
    if (entry.isIntersecting) {
      setOpacity(1);
      observer.disconnect();
    }
  };
  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(handleIntersection, { threshold: 0.4 });
      observer.observe(target);
    }
  }, [target]);
  return (
    <Container ref={setTarget}>
      <Title isShowing={opacity}>Skills</Title>
      <ContentBox isShowing={opacity}>
        <Image src='image/html.svg' />
        <Image src='image/css.svg' />
        <Image src='image/js.png' />
        <Image src='image/react.png' />
        <Image src='image/storybookLogo.png' />
        <Image src='image/node.svg' />
      </ContentBox>
    </Container>
  );
}

export default Skills;
