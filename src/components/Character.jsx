import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 800px;
  width: 100%;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border-width: 0px 0px 15px 0px;
  border-style: solid;
  border-color: white;
`;
const ImageBox = styled.div`
  position: relative;
`;
const Image = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-image: url(${({ src }) => src});
  background-size: cover;
  border-radius: 5px;
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
  return (
    <Container>
      <ContentBox>
        <ImageBox>
          <Blur height='600px' width='350px'>
            <Text>Challenge</Text>
          </Blur>
          <Image src='image/climbing.jpg' height='600px' width='350px' />
        </ImageBox>

        <ImageBox>
          <Blur height='350px' width='500px'>
            <Text>cooperation</Text>
          </Blur>
          <Image src='image/dance.jpg' height='350px' width='500px' />
        </ImageBox>

        <ImageBox>
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
