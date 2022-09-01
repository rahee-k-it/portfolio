import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 650px;
  width: 100%;
  background-color: #dff9fb;
  font-size: 30px;
  position: relative;
  background-color: black;
`;

const Title = styled.div`
  height: 100px;
  width: 200px;
  background-color: #3c40c6;
  font-size: 70px;
  font-weight: 500;
  margin: 10px;
  position: absolute;
  z-index: 1;
`;

const ContentBox = styled.div`
  background-image: url('image/whitestar.jpg');
  background-size: cover;
  background-position: 50% 30%;
  border-radius: 20px;
  height: 500px;
  width: 90%;
  background-color: #f1d28d;
  margin: 5%;
  position: absolute;
  /* z-index: 1; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* box-shadow: 0px 0px 20px 5px white; */
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
  return (
    <Container>
      <Title>Skills</Title>
      <ContentBox>
        <Image src='image/html.svg' />
        <Image src='image/css.svg' />
        <Image src='image/js.png' />
        <Image src='image/react.png' />
      </ContentBox>
    </Container>
  );
}

export default Skills;
