import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 650px;
  width: 100%;
  background-color: black;
  font-size: 30px;
  position: relative;
`;

const Title = styled.div`
  height: 100px;
  width: 200px;
  background-color: #e31a3b;
  font-size: 70px;
  font-weight: 500;
  margin: 10px;
  position: absolute;
  z-index: 2;
`;

const ContentBox = styled.div`
  border-radius: 20px;
  height: 500px;
  width: 90%;
  background-color: wheat;
  margin: 5%;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  height: 200px;
  width: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ src }) => src});
  background-position: center;
  margin: 30px;
`;

function Skills() {
  return (
    <Container>
      <Title>Skills</Title>
      <ContentBox>
        <ImageBox src='image/html.svg' />
        <ImageBox src='image/css.svg' />
        <ImageBox src='image/js.png' />
        <ImageBox src='image/react.png' />
      </ContentBox>
    </Container>
  );
}

export default Skills;
