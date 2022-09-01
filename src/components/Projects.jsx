import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faCalendarDays, faPeopleGroup, faGear } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  height: 1500px;
  background-color: #dff9fb;
  font-size: 30px;
  position: relative;
  padding: 80px;
  background-color: black;
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
  z-index: 1;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentBox = styled.div`
  border-radius: 20px;
  width: 67%;
  background-color: #ecf0f1;
  padding: 50px 15px 15px 15px;
  margin-bottom: 50px;
  background-image: url('image/gra.jpg');
  background-size: cover;
  background-position: 50% 100%;
`;

const IntroBox = styled.div`
  height: 600px;
  width: 400px;
  text-align: start;
  padding: 30px;
  color: white;
`;

const Intro = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProjectInTitle = styled.div`
  color: #535c68;
  height: 70px;
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Image = styled.div`
  height: 400px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  box-shadow: 5px 5px 5px 5px gray;
`;

function Projects() {
  return (
    <Container>
      <Title>Project</Title>
      <FlexBox>
        <ContentBox>
          <ProjectInTitle>StoryBook</ProjectInTitle>
          <Image src='image/storybook.png' />
        </ContentBox>
        <IntroBox>
          <Intro>
            <FontAwesomeIcon icon={faFile} />
            <p>프로젝트명: StoryBook</p>
          </Intro>
          <Intro>
            <FontAwesomeIcon icon={faCalendarDays} />
            <p>일정: 2022.07.25~</p>
          </Intro>
          <Intro>
            <FontAwesomeIcon icon={faPeopleGroup} />
            <p>팀 프로젝트</p>
          </Intro>
          <Intro>
            <FontAwesomeIcon icon={faGear} />
            <p>react를 사용하여 UI component를 만듦</p>
          </Intro>
        </IntroBox>
      </FlexBox>
      <FlexBox>
        <ContentBox>
          <ProjectInTitle>Portfolio</ProjectInTitle>
          <Image src='image/portfolio.png' />
        </ContentBox>
        <IntroBox>
          <Intro>
            <FontAwesomeIcon icon={faFile} />
            <p>프로젝트명: Portfolio</p>
          </Intro>
          <Intro>
            <FontAwesomeIcon icon={faCalendarDays} />
            <p>일정: 2022.08.29~</p>
          </Intro>
          <Intro>
            <FontAwesomeIcon icon={faPeopleGroup} />
            <p>개인 프로젝트</p>
          </Intro>
          <Intro>
            <FontAwesomeIcon icon={faGear} />
            <p>react를 사용하여 UI component를 만듦</p>
          </Intro>
        </IntroBox>
      </FlexBox>
    </Container>
  );
}

export default Projects;
