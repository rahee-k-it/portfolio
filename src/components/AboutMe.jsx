import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 600px;
  width: 100%;
  font-size: 30px;
  position: relative;
  padding-top: 100px;
  background-color: black;
`;

const Title = styled.div`
  height: 100px;
  width: 350px;
  background-color: #c23616;
  font-size: 70px;
  font-weight: 500;
  margin: 10px;
  position: absolute;
  z-index: 1;
`;

const ContentBox = styled.div`
  border-width: 3px 3px 3px 3px;
  border-style: solid;
  height: 500px;
  width: 90%;
  margin: 5% 5% 0% 5%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: white;
  opacity: ${({ opacity }) => (opacity ? '1' : '0')};
  transition: opacity 1s ease-in-out;
`;

const Introduction = styled.div`
  height: 300px;
  width: 600px;
  padding: 0px 50px;
  text-align: start;
`;

const PersonalInformation = styled.div`
  height: 300px;
  width: 500px;
  text-align: start;
  padding-left: 50px;
`;

const BoldText = styled.span`
  font-weight: 700;
`;

function AboutMe() {
  // const [scroll, setScroll] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll); //clean up
  //   };
  // }, []);

  // const handleScroll = () => {
  //   if (window.scrollY >= 300) {
  //     setScroll(true);
  //     console.log('scroll300 어바웃미 보임', window.scrollY);
  //   } else {
  //     setScroll(false);
  //   }
  // };
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
    <Container>
      <Title ref={setTarget}>About Me</Title>

      <ContentBox opacity={opacity}>
        <Introduction>
          삶에 있어 즐거운 일에 몰두하며 시간보내는 것을 가장 중요하게 생각합니다. 우연한 기회에 코딩을 접하게 되었고,
          코드를 하나씩 배워가며 적용함에 있어 코딩의 재미를 느꼈습니다. 제가 작성한 코드가 화면에 아름답게 비추어지듯
          코딩을 통해 미래를 그려나가는 개발자가 되고싶습니다.
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
