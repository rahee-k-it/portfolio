import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSplotch } from '@fortawesome/free-solid-svg-icons';
<FontAwesomeIcon icon={faSplotch} />;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`;

const Title = styled.div`
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isShowing }) => (isShowing ? '1' : '0')};
  transition: opacity 1s ease-in-out;
  height: 80px;
  width: 370px;
  font-weight: 900;
  background-color: #1cb155;
  font-size: 50px;
  color: #f9f3c0;

  @media (max-width: 400px) {
    height: 40px;
    width: 220px;
    font-weight: 900;
    font-size: 30px;
    margin: 50px 0px 10px 0px;
  }
`;

const TitleIcon = styled.div`
  font-size: 30px;
  margin: 5px;

  @media (max-width: 400px) {
    font-size: 20px;
    margin: 5px;
  }
`;

const ContentBox = styled.div`
  border-width: 3px 3px 3px 3px;
  border-style: solid;
  height: 400px;
  width: 1100px;
  margin: 60px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: white;
  opacity: ${({ isShowing }) => (isShowing ? '1' : '0')};
  transition: opacity 1s ease-in-out;
  padding-left: 50px;

  @media (max-width: 400px) {
    height: 500px;
    width: 300px;
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 10px;
  }
`;

const Introduction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  height: 300px;
  width: 600px;
  text-align: start;
  font-size: 25px;
  :hover {
    background: linear-gradient(to right, #a55eea, #2d98da);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 400px) {
    height: 400px;
    width: 300px;
    font-size: 20px;
  }
`;

const PersonalInformation = styled.div`
  line-height: 2;
  height: 300px;
  width: 500px;
  text-align: start;
  padding-left: 100px;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  :hover {
    background: linear-gradient(to right, #a55eea, #2d98da);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 400px) {
    height: 200px;
    width: 300px;
    font-size: 20px;
    padding-left: 0px;
  }
`;

const BoldText = styled.span`
  font-weight: 700;
`;

function AboutMe() {
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
      <Title isShowing={opacity}>
        <TitleIcon>
          <FontAwesomeIcon icon={faSplotch} />
        </TitleIcon>
        About Me
        <TitleIcon>
          <FontAwesomeIcon icon={faSplotch} />
        </TitleIcon>
      </Title>
      <ContentBox isShowing={opacity}>
        <Introduction>
          ???????????????. ????????? ????????? ??????????????? ????????? ????????? ?????????. ????????? ?????? ????????? ??????????????? ????????? ??? ?????????
          ????????? ?????? ??????????????? ???????????? ????????? ?????????????????????. ?????????????????? ???????????? ????????? ?????? ????????? ????????? ?????????
          ??? ???????????? ????????? ?????? ?????? ???????????? ???????????? ?????? ????????????!
        </Introduction>
        <PersonalInformation>
          <p>
            <BoldText>??????:</BoldText> ?????????
          </p>
          <p>
            <BoldText>????????????:</BoldText> 97.08.05
          </p>
          <p>
            <BoldText>?????????:</BoldText> rahee.k.it@gmail.com
          </p>
        </PersonalInformation>
      </ContentBox>
    </Container>
  );
}

export default AboutMe;
