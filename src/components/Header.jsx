import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('image/dot3.jpg');
  background-size: cover;
  background-position: 50% 70%;

  /* -webkit-font-smoothing: antialiased; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  height: 300px;
`;

const Span = styled.span`
  font-size: 60px;
  font-weight: 900;
  opacity: ${({ opacity }) => (opacity ? '1' : '0')};
  position: relative;
  top: 2px;
  animation: bounce 0.5s ease infinite alternate;
  color: #fff;
  text-shadow: 0 1px 0 #535c68, 0 2px 0 #535c68, 0 3px 0 #535c68, 0 4px 0 #535c68, 0 5px 0 #535c68, 0 6px 0 transparent,
    0 7px 0 transparent, 0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);

  :nth-child(1) {
    animation-delay: 0.2s;
    transition: opacity 2s ease-in-out;
  }
  :nth-child(2) {
    animation-delay: 0.1s;
    transition: opacity 1s ease-in-out;
  }
  :nth-child(3) {
    animation-delay: 0.2s;
    transition: opacity 2s ease-in-out;
  }
  :nth-child(4) {
    animation-delay: 0.1s;
    transition: opacity 1s ease-in-out;
  }
  :nth-child(5) {
    animation-delay: 0.2s;
    transition: opacity 2s ease-in-out;
  }
  :nth-child(6) {
    animation-delay: 0.3s;
    transition: opacity 3s ease-in-out;
  }
  :nth-child(7) {
    animation-delay: 0.1s;
    transition: opacity 1s ease-in-out;
  }
  :nth-child(8) {
    animation-delay: 0.3s;
    transition: opacity 3s ease-in-out;
  }
  :nth-child(9) {
    animation-delay: 0.1s;
    transition: opacity 1s ease-in-out;
  }
  :nth-child(10) {
    animation-delay: 0.2s;
    transition: opacity 2s ease-in-out;
  }
  :nth-child(11) {
    animation-delay: 0.1s;
    transition: opacity 1s ease-in-out;
  }
  :nth-child(12) {
    animation-delay: 0.2s;
    transition: opacity 2s ease-in-out;
  }
  :nth-child(13) {
    animation-delay: 0.2s;
    transition: opacity 2s ease-in-out;
  }
  :nth-child(14) {
    animation-delay: 0.1s;
    transition: opacity 1s ease-in-out;
  }

  @keyframes bounce {
    100% {
      top: -2px;
      text-shadow: 0 1px 0 #535c68, 0 2px 0 #535c68, 0 3px 0 #535c68, 0 4px 0 #535c68, 0 5px 0 #535c68, 0 6px 0 #535c68,
        0 7px 0 #535c68, 0 8px 0 #535c68, 0 9px 0 #535c68, 0 50px 25px rgba(0, 0, 0, 0.2);
    }
  }
`;

function Header() {
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
    <Container ref={setTarget}>
      <H1>
        <p>
          <Span opacity={opacity}>반</Span>
          <Span opacity={opacity}>갑</Span>
          <Span opacity={opacity}>습</Span>
          <Span opacity={opacity}>니</Span>
          <Span opacity={opacity}>다</Span>
        </p>
        <p>
          <Span opacity={opacity}>프</Span>
          <Span opacity={opacity}>론</Span>
          <Span opacity={opacity}>트</Span>
          <Span opacity={opacity}>엔</Span>
          <Span opacity={opacity}>드</Span>
          &nbsp; &nbsp;
          <Span opacity={opacity}>개</Span>
          <Span opacity={opacity}>발</Span>
          <Span opacity={opacity}>자</Span>
          &nbsp; &nbsp;
          <Span opacity={opacity}>김</Span>
          <Span opacity={opacity}>라</Span>
          <Span opacity={opacity}>희</Span>
          <Span opacity={opacity}>입</Span>
          <Span opacity={opacity}>니</Span>
          <Span opacity={opacity}>다</Span>
        </p>
      </H1>
    </Container>
  );
}

export default Header;
