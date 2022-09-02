import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 800px;
  width: 100%;
  background-color: #dff9fb;
  font-size: 30px;
  position: relative;
  background-color: black;
  /* background-color: pink; */
`;

const Title = styled.div`
  opacity: ${({ opacity }) => (opacity ? '1' : '0')};
  transition: opacity 2s ease-in-out;
  height: 100px;
  width: 200px;
  background-color: #3c40c6;
  font-size: 70px;
  font-family: fantasy;
  margin: 10px;
  position: absolute;
  z-index: 1;
`;

const ContentBox = styled.div`
  opacity: ${({ opacity }) => (opacity ? '1' : '0')};
  transition: opacity 3s ease-in-out;
  background-image: url('image/white2.jpg');
  background-size: cover;
  background-position: 30% 20%;
  border-radius: 0px;
  height: 500px;
  width: 90%;
  background-color: #f1d28d;
  margin: 5%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 0px 35px 5px wheat;
`;

const Image = styled.div`
  height: 200px;
  width: 200px;
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
      // observer.unObserve(entry.target)
      observer.disconnect();
    }
  };
  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(handleIntersection);
      observer.observe(target);
    }
  }, [target]);
  return (
    <Container ref={setTarget}>
      <Title opacity={opacity}>Skills</Title>
      <ContentBox opacity={opacity}>
        <Image src='image/html.svg' />
        <Image src='image/css.svg' />
        <Image src='image/js.png' />
        <Image src='image/react.png' />
      </ContentBox>
    </Container>
  );
}

export default Skills;
