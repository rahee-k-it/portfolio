import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faCalendarDays, faPeopleGroup, faGear } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  height: 700px;
  /* background-color: #dff9fb; */
  font-size: 30px;
  position: relative;
  padding: 80px;
  background-color: black;
  /* background-color: azure; */
`;

const Title = styled.div`
  height: 100px;
  width: 230px;
  background-color: #ffa502;
  font-size: 70px;
  font-family: fantasy;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;

  opacity: ${({ opacity }) => (opacity ? '1' : '0')};
  transition: opacity 3s ease-in-out, transform 3s ease-in-out;
  transition-delay: ${({ delay = 0 }) => delay};
  transform: translate(
    ${({ translate }) => (translate ? '0px' : '200px')},
    ${({ translate }) => (translate ? '0px' : '0px')}
  );
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

const Wrapper = styled.div`
  height: 70px;
  display: grid;
  place-items: center;
`;

const Typing = styled.div`
  width: 10ch;
  animation: typing 2s steps(10), blink 0.3s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 2em;

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

// const A = styled.div`
//   /* background-color: pink; */
//   height: 70px;
//   display: flex;
//   justify-content: center;
// `;

const Image = styled.div`
  height: 400px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  box-shadow: 5px 5px 5px 5px gray;
`;

function Project2() {
  const [target, setTarget] = useState(null);
  const [opacity, setOpacity] = useState(false);
  const [translate, setTranslate] = useState(false);
  const handleIntersection = ([entry], observer) => {
    if (entry.isIntersecting) {
      console.log('intersecting 캐릳터');
      setOpacity(1);
      setTranslate(true);
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
    <Container ref={setTarget}>
      <FlexBox opacity={opacity} translate={translate}>
        <ContentBox>
          <Wrapper>
            <Typing>Portfolio Site</Typing>
          </Wrapper>
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

export default Project2;
