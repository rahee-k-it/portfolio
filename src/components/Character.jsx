import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: black;
  /* background-color: green; */
`;

const ContentBox = styled.div`
  background-color: black;
  height: 700px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageBox = styled.div`
  position: relative;
  opacity: ${({ opacity }) => (opacity ? '1' : '0')};
  transition: opacity 3s ease-in-out, transform 3s ease-in-out;
  transition-delay: ${({ delay = 0 }) => delay};
  transform: translate(
    ${({ translate }) => (translate ? '0px' : '100px')},
    ${({ translate }) => (translate ? '0px' : '100px')}
  );
`;

const Image = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-image: url(${({ src }) => src});
  background-size: cover;
  border-radius: 5px 60px 5px 30px;
`;

const Blur = styled.div`
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
`;

const Text = styled.div`
  color: white;
  font-size: 70px;
  text-shadow: 3px 3px 3px #000;
  z-index: 2;
`;

function Character() {
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
      observer = new IntersectionObserver(handleIntersection, { threshold: 0.4 });
      observer.observe(target);
    }
  }, [target]);
  return (
    <Container ref={setTarget}>
      <ContentBox>
        <ImageBox opacity={opacity} translate={translate}>
          <Blur height='600px' width='350px'>
            <Text>Challenge</Text>
          </Blur>
          <Image src='image/climbing.jpg' height='600px' width='350px' />
        </ImageBox>

        <ImageBox opacity={opacity} delay='.5s' translate={translate}>
          <Blur height='350px' width='500px'>
            <Text>cooperation</Text>
          </Blur>
          <Image src='image/danceImage.jpg' height='350px' width='500px' />
        </ImageBox>

        <ImageBox opacity={opacity} delay='1s' translate={translate}>
          <Blur height='450px' width='450px'>
            <Text>Positive</Text>
          </Blur>
          <Image src='image/positive.jpg' height='450px' width='450px' />
        </ImageBox>
      </ContentBox>
    </Container>
  );
}

export default Character;
