import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: black;
`;

const Title = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isShowing }) => (isShowing ? '1' : '0')};
  transition: opacity 1s ease-in-out;
  height: 2em;
  width: 5em;
  background-color: #912c15;
  font-size: 3em;
  top: 20%;
  left: 5%;
  position: absolute;
  z-index: 1;
`;

const ContentBox = styled.div`
  opacity: ${({ isShowing }) => (isShowing ? '1' : '0')};
  transition: opacity 3s ease-in-out;
  border-radius: 0px;
  height: 28em;
  width: 80%;
  background-color: #ffffff;
  margin: 5% 0% 0% 0%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 0px 35px 5px white;
`;

const Image = styled.div`
  height: 150px;
  width: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src});
  background-position: center;
  margin: 30px;
`;

function Skills() {
  const [target, setTarget] = useState(null);
  const [opacity, setOpacity] = useState(false);
  const handleIntersection = ([entry], observer) => {
    if (entry.isIntersecting) {
      console.log('intersecting');
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
        <Image src='portfolio/image/html.svg' />
        <Image src='portfolio/image/css.svg' />
        <Image src='portfolio/image/js.png' />
        <Image src='portfolio/image/react.png' />
        <Image src='portfolio/image/storybookLogo.png' />
      </ContentBox>
    </Container>
  );
}

export default Skills;
