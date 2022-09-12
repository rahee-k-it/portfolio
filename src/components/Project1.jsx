import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faCalendarDays, faPeopleGroup, faGear, faLink } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Title = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  width: 4em;
  background-color: #912c15;
  font-size: 3em;
  font-family: fantasy;
  position: absolute;
  top: 20%;
  left: 5%;
  position: absolute;
  z-index: 1;
  opacity: ${({ isShowing }) => (isShowing ? '1' : '0')};
  transition: opacity 3s ease-in-out, transform 3s ease-in-out;
  transition-delay: ${({ delay = 0 }) => delay};
  transform: translate(${({ isMoved }) => (isMoved ? '0px' : '200px')}, ${({ isMoved }) => (isMoved ? '0px' : '0px')});
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 30em;
  width: 80%;
  margin: 9% 0% 0% 0%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isShowing }) => (isShowing ? '1' : '0')};
  transition: opacity 3s ease-in-out, transform 3s ease-in-out;
  transition-delay: ${({ delay = 0 }) => delay};
  transform: translate(${({ isMoved }) => (isMoved ? '0px' : '200px')}, ${({ isMoved }) => (isMoved ? '0px' : '0px')});
`;

const ContentBox = styled.div`
  border-radius: 20px;
  height: 27em;
  width: 70%;
  padding: 50px 15px 15px 15px;
  background-image: url('image/whiteWave.jpg');
  background-size: cover;
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  margin-bottom: 30px;
`;

const IntroBox = styled.div`
  height: 25em;
  width: 30%;
  padding: 50px 15px 15px 15px;
  text-align: start;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000000;
`;

const Intro = styled.div`
  line-height: 1.5;
  font-size: 1.5em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

const Image = styled.div`
  height: 23em;
  background-image: url(${({ src }) => src});
  background-size: cover;
  box-shadow: 5px 5px 5px 5px gray;
`;

const GitHubLink = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    color: orange;
  }
`;

function Project1() {
  const [target, setTarget] = useState(null);
  const [opacity, setOpacity] = useState(false);
  const [translate, setTranslate] = useState(false);
  const handleIntersection = ([entry], observer) => {
    if (entry.isIntersecting) {
      console.log('intersecting 캐릳터');
      setOpacity(1);
      setTranslate(true);
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
      <Title isShowing={opacity} isMoved={translate}>
        Project
      </Title>
      <FlexBox isShowing={opacity} isMoved={translate}>
        <ContentBox>
          <ContentTitle>u-react-ui</ContentTitle>

          <Image src='image/storybook.png' />
        </ContentBox>
        <IntroBox>
          <Intro>
            <FontAwesomeIcon icon={faFile} style={{ marginRight: '20px' }} />
            <p>프로젝트명: u-react-ui</p>
          </Intro>
          <Intro>
            <FontAwesomeIcon icon={faCalendarDays} style={{ marginRight: '20px' }} />
            <p>일정: 2022.07.25~</p>
          </Intro>
          <Intro>
            <FontAwesomeIcon icon={faPeopleGroup} style={{ marginRight: '20px' }} />
            <p>팀 프로젝트(3인)</p>
          </Intro>
          <Intro style={{ alignItems: 'flex-start' }}>
            <FontAwesomeIcon icon={faGear} style={{ margin: '10px 20px 0px 0px' }} />
            <p>Storybook을 활용한 React UI 컴포넌트 라이브러리</p>
          </Intro>
          <Intro>
            <FontAwesomeIcon icon={faLink} style={{ marginRight: '20px' }} />
            <GitHubLink href='https://github.com/rahee-k-it/react-ui-storybook' target='_blank'>
              GitHub 이동하기
            </GitHubLink>
          </Intro>
        </IntroBox>
      </FlexBox>
    </Container>
  );
}

export default Project1;
