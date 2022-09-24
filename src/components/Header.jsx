import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('image/dot.jpg');
  background-size: cover;
  background-position: 50% 70%;
  -webkit-font-smoothing: antialiased;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  height: 100px;
`;

const Span = styled.span`
  font-size: 70px;
  font-weight: 500;
  opacity: ${({ isShowing }) => (isShowing ? '1' : '0')};
  position: relative;
  top: 2px;
  animation: bounce 0.5s ease infinite alternate;
  color: #a1f4bb;
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

  @media (max-width: 400px) {
    font-weight: 500;
    font-size: 20px;
  }
`;

function Header() {
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
      observer = new IntersectionObserver(handleIntersection);
      observer.observe(target);
    }
  }, [target]);
  return (
    <Container ref={setTarget}>
      <H1>
        <p style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
          <Span isShowing={opacity}>반</Span>
          <Span isShowing={opacity}>갑</Span>
          <Span isShowing={opacity}>습</Span>
          <Span isShowing={opacity}>니</Span>
          <Span isShowing={opacity}>다</Span>
        </p>
        <p>
          <Span isShowing={opacity}>프</Span>
          <Span isShowing={opacity}>론</Span>
          <Span isShowing={opacity}>트</Span>
          <Span isShowing={opacity}>엔</Span>
          <Span isShowing={opacity}>드</Span>
          &nbsp; &nbsp;
          <Span isShowing={opacity}>개</Span>
          <Span isShowing={opacity}>발</Span>
          <Span isShowing={opacity}>자</Span>
          &nbsp; &nbsp;
          <Span isShowing={opacity}>김</Span>
          <Span isShowing={opacity}>라</Span>
          <Span isShowing={opacity}>희</Span>
          <Span isShowing={opacity}>입</Span>
          <Span isShowing={opacity}>니</Span>
          <Span isShowing={opacity}>다</Span>
        </p>
      </H1>
    </Container>
  );
}

export default Header;
