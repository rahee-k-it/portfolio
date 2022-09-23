import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  /* background-color: #92cc8c; */
  height: 100vh;
  width: 100vw;
  font-size: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const ContentBox = styled.div`
  padding: 0px 20px 0px 20px;
  /* background-color: #cc8c8c; */
  height: 600px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

const ImageBox = styled.div`
  position: relative;
  opacity: ${({ isShowing }) => (isShowing ? '1' : '0')};
  transition: opacity 3s ease-in-out, transform 3s ease-in-out;
  transition-delay: ${({ delay = 0 }) => delay};
  transform: translate(
    ${({ isMoved }) => (isMoved ? '0px' : '100px')},
    ${({ isMoved }) => (isMoved ? '0px' : '100px')}
  );

  @media (max-width: 400px) {
    margin-bottom: 5px;
  }
`;

const Image1 = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-image: url(${({ src }) => src});
  background-size: cover;
  border-radius: 5px 60px 5px 30px;
  height: 500px;
  width: 300px;

  @media (max-width: 400px) {
    height: 250px;
    width: 150px;
    border-radius: 5px 30px 5px 30px;
  }
`;

const Image2 = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-image: url(${({ src }) => src});
  background-size: cover;
  border-radius: 5px 60px 5px 30px;
  height: 300px;
  width: 400px;

  @media (max-width: 400px) {
    height: 130px;
    width: 220px;
    border-radius: 5px 30px 5px 30px;
  }
`;

const Image3 = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-image: url(${({ src }) => src});
  background-size: cover;
  border-radius: 5px 60px 5px 30px;
  height: 400px;
  width: 400px;

  @media (max-width: 400px) {
    height: 200px;
    width: 200px;
    border-radius: 5px 30px 5px 30px;
  }
`;

const Blur1 = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  backdrop-filter: blur(3px);
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }

  @media (max-width: 400px) {
    height: 250px;
    width: 150px;
    border-radius: 5px 30px 5px 30px;
  }
`;

const Blur2 = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  backdrop-filter: blur(3px);
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }

  @media (max-width: 400px) {
    height: 130px;
    width: 220px;
    border-radius: 5px 30px 5px 30px;
  }
`;

const Blur3 = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  backdrop-filter: blur(3px);
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }

  @media (max-width: 400px) {
    height: 200px;
    width: 200px;
    border-radius: 5px 30px 5px 30px;
  }
`;

const Text = styled.div`
  color: white;
  font-size: 50px;
  text-shadow: 3px 3px 3px #000;
  z-index: 2;

  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

function Character() {
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
      <ContentBox>
        <ImageBox isShowing={opacity} isMoved={translate}>
          <Blur1 height='500px' width='300px'>
            <Text>Challenge</Text>
          </Blur1>
          <Image1 src='image/climbing.jpg' />
        </ImageBox>

        <ImageBox isShowing={opacity} delay='.3s' isMoved={translate}>
          <Blur2 height='300px' width='400px'>
            <Text>cooperation</Text>
          </Blur2>
          <Image2 src='image/dance.jpg' />
        </ImageBox>

        <ImageBox isShowing={opacity} delay='.5s' isMoved={translate}>
          <Blur3 height='400px' width='400px'>
            <Text>Positive</Text>
          </Blur3>
          <Image3 src='image/positive.jpg' />
        </ImageBox>
      </ContentBox>
    </Container>
  );
}

export default Character;
