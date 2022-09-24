import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faCalendarDays, faUser, faGear, faLink } from '@fortawesome/free-solid-svg-icons';
import Carousel from './carousel/Carousel';
import CarouselItem from './carousel/CarouselItem';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  overflow: hidden;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 500px;
  width: 1300px;
  margin: 150px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isShowing }) => (isShowing ? '1' : '0')};
  transition: opacity 3s ease-in-out, transform 3s ease-in-out;
  transition-delay: ${({ delay = 0 }) => delay};
  transform: translate(${({ isMoved }) => (isMoved ? '0px' : '200px')}, ${({ isMoved }) => (isMoved ? '0px' : '0px')});

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    margin: 70px 0px 0px 0px;
  }
`;

const ContentBox = styled.div`
  border-radius: 20px;
  height: 450px;
  width: 750px;
  padding: 20px 15px 10px 15px;
  background-image: url('image/whiteWave.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 400px) {
    height: 400px;
    width: 300px;
    border-radius: 10px;
    margin: 10px 0px;
  }
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  margin-bottom: 30px;

  @media (max-width: 400px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const IntroBox = styled.div`
  height: 400px;
  width: 400px;
  padding: 50px 15px 15px 15px;
  text-align: start;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000000;

  @media (max-width: 400px) {
    height: 200px;
    width: 250px;
  }
`;

const Intro = styled.div`
  line-height: 1.5;
  font-size: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 400px) {
    font-size: 15px;
    line-height: 1.1;
  }
`;

const ItemImg = styled.div`
  overflow: hidden;
  background-size: cover;
  background-image: url(${({ imgSrc }) => imgSrc});
  width: 100%;
  height: 350px;

  //fnfnffnfn
  @media (max-width: 400px) {
    width: 100%;
    height: 100%;
  }
`;

const GitHubLink = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    color: orange;
  }
`;

function Project2() {
  const [target, setTarget] = useState(null);
  const [opacity, setOpacity] = useState(false);
  const [translate, setTranslate] = useState(false);
  const handleIntersection = ([entry], observer) => {
    if (entry.isIntersecting) {
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
      <FlexBox isShowing={opacity} isMoved={translate}>
        <ContentBox>
          <ContentTitle>Portfolio Site</ContentTitle>
          <Carousel>
            {[
              'image/project2/project2Image1.png',
              'image/project2/project2Image2.png',
              'image/project2/project2Image3.png',
              'image/project2/project2Image4.png',
              'image/project2/project2Image5.png',
              'image/project2/project2Image6.png',
            ].map((imgSrc, i) => {
              return (
                <CarouselItem key={i}>
                  <ItemImg imgSrc={imgSrc} />
                </CarouselItem>
              );
            })}
          </Carousel>
        </ContentBox>
        <IntroBox>
          <Intro>
            <FontAwesomeIcon icon={faFile} style={{ marginRight: '20px' }} />
            <p>프로젝트명: Portfolio Site</p>
          </Intro>
          <Intro>
            <FontAwesomeIcon icon={faCalendarDays} style={{ marginRight: '20px' }} />
            <p>일정: 2022.08.30~</p>
          </Intro>
          <Intro>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '20px' }} />
            <p>개인 프로젝트</p>
          </Intro>
          <Intro style={{ alignItems: 'flex-start' }}>
            <FontAwesomeIcon icon={faGear} style={{ margin: '10px 20px 0px 0px' }} />
            <p>
              React로 구현한 포트폴리오
              <br /> 사이트
            </p>
          </Intro>
          <Intro>
            <FontAwesomeIcon icon={faLink} style={{ marginRight: '20px' }} />
            <GitHubLink href='https://github.com/rahee-k-it/portfolio' target='_blank'>
              GitHub 이동하기
            </GitHubLink>
          </Intro>
        </IntroBox>
      </FlexBox>
    </Container>
  );
}

export default Project2;
