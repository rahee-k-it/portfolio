import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #000000;
`;

const Title = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isShowing }) => (isShowing ? '1' : '0')};
  transition: opacity 1s ease-in-out;
  height: 80px;
  width: 250px;
  font-weight: 900;
  background-color: #1cb155;
  font-size: 50px;
  top: 150px;
  position: absolute;
  z-index: 1;

  @media (min-width: 400px) {
    left: 50px;
  }

  @media (max-width: 400px) {
    height: 40px;
    width: 180px;
    font-weight: 900;
    font-size: 30px;
    top: 70px;
  }
`;

const ContentBox = styled.div`
  border-width: 3px 3px 3px 3px;
  border-style: solid;
  height: 400px;
  width: 1100px;
  margin: 60px 0px 0px 0px;
  position: absolute;
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
  /* background-color: #2d98da; */
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
  /* background-color: #2ddaac; */
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
      <Title isShowing={opacity}>About Me</Title>
      <ContentBox isShowing={opacity}>
        <Introduction>
          안녕하세요. 개발이 즐거운 프론트엔드 개발자 김라희 입니다. 코드를 통해 화면을 원하는대로 구현할 수 있음에
          매력을 느껴 프론트엔드 개발자가 되기로 결심하였습니다. 비전공자이고 남들보다 시작이 늦어 불안한 마음이 들지만
          이 불안함을 연료로 삼아 더욱 성장하는 개발자가 되고 싶습니다!
        </Introduction>
        <PersonalInformation>
          <p>
            <BoldText>이름:</BoldText> 김라희
          </p>
          <p>
            <BoldText>생년월일:</BoldText> 97.08.05
          </p>
          <p>
            <BoldText>이메일:</BoldText> rahee.k.it@gmail.com
          </p>
        </PersonalInformation>
      </ContentBox>
    </Container>
  );
}

export default AboutMe;
