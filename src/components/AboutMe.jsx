import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 600px;
  width: 100%;
  font-size: 30px;
  position: relative;
  padding-top: 100px;
  background-color: black;
  /* background-color: #9ac7f8; */
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
  border-width: 15px 0px 0px 0px;
  border-style: solid;
  border-color: white;
  height: 500px;
  width: 90%;
  /* margin: 5%; */
  margin: 5% 5% 0% 5%;
  position: absolute;
  /* z-index: 1; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: white;
  /* background-color: blueviolet; */
`;

const Introduction = styled.div`
  height: 400px;
  width: 700px;
  /* background-color: antiquewhite; */
`;

const PersonalInformation = styled.div`
  height: 400px;
  width: 500px;
  /* background-color: #e2cd2b; */
  text-align: start;
  padding-left: 50px;
`;

const BoldText = styled.span`
  font-weight: 700;
`;

const Button = styled.button``;

function AboutMe() {
  return (
    <Container>
      <Title>About Me</Title>
      <ContentBox>
        <Introduction>
          저는 만드는 행위를 즐깁니다. 어렸을 때부터 만들기를 좋아하여 나이가 들어도 꾸준히 무엇인가 사부작 거리며
          만들어왔습니다. 코딩을 통해 컴퓨더 화면을 구성할 수 있음을 알게 되었고 흥미가 생겼습니다.저는 만드는 행위를
          즐깁니다. 어렸을 때부터 만들기를 좋아하여 나이가 들어도 꾸준히 무엇인가 사부작 거리며 만들어왔습니다. 코딩을
          통해 컴퓨더 화면을 구성할 수 있음을 알게 되었고 흥미가 생겼습니다.
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
          <Button>자기소개서</Button>
          <Button>이력서</Button>
        </PersonalInformation>
      </ContentBox>
    </Container>
  );
}

export default AboutMe;
