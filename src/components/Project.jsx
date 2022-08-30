import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 1300px;
  background-color: white;
  font-size: 30px;
  position: relative;
  padding: 80px;
`;

const Title = styled.div`
  height: 100px;
  width: 230px;
  background-color: #ffa502;
  font-size: 70px;
  font-weight: 500;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  border-radius: 20px;
  width: 67%;
  background-color: #4b7bec;
  padding: 50px 15px 15px 15px;
`;

const Intro = styled.div`
  border: 2px solid black;
  height: 600px;
  width: 400px;
`;

const ProjectInTitle = styled.div`
  height: 70px;
  font-size: 50px;
  font-weight: 500;
  text-decoration: underline;
  margin-bottom: 20px;
`;

const ImageBox = styled.div`
  height: 400px;
  background-image: url('image/storybook.png');
  background-size: cover;
`;

function Project() {
  return (
    <Container>
      <Title>Project</Title>
      <FlexBox>
        <ContentBox>
          <ProjectInTitle>Story Book</ProjectInTitle>
          <ImageBox></ImageBox>
        </ContentBox>
        <Intro></Intro>
      </FlexBox>
    </Container>
  );
}

export default Project;
