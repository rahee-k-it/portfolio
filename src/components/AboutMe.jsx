import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 650px;
  width: 100%;
  background-color: #535353;
  font-size: 30px;
  position: relative;
`;

const Title = styled.div`
  height: 100px;
  width: 350px;
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

function AboutMe() {
  return (
    <Container>
      <Title>About Me</Title>
      <ContentBox>
        <p>이름 김라희</p> <p>생년월일 970805</p>
      </ContentBox>
    </Container>
  );
}

export default AboutMe;
