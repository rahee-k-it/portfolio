import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 700px;
  width: 100%;
  background-image: url('image/dot3.jpg');
  background-size: cover;
  background-position: 50% 70%;
  font-size: 30px;
  font-weight: 900;

  -webkit-font-smoothing: antialiased;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  height: 300px;
`;

const Span = styled.span`
  position: relative;
  top: 2px;
  animation: bounce 0.5s ease infinite alternate;
  color: #fff;
  text-shadow: 0 1px 0 #535c68, 0 2px 0 #535c68, 0 3px 0 #535c68, 0 4px 0 #535c68, 0 5px 0 #535c68, 0 6px 0 transparent,
    0 7px 0 transparent, 0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);

  :nth-child(1) {
    animation-delay: 0.2s;
  }
  :nth-child(2) {
    animation-delay: 0.1s;
  }
  :nth-child(3) {
    animation-delay: 0.2s;
  }
  :nth-child(4) {
    animation-delay: 0.1s;
  }
  :nth-child(5) {
    animation-delay: 0.4s;
  }
  :nth-child(6) {
    animation-delay: 0.3s;
  }
  :nth-child(7) {
    animation-delay: 0.1s;
  }
  :nth-child(8) {
    animation-delay: 0.3s;
  }
  :nth-child(9) {
    animation-delay: 0.5s;
  }
  :nth-child(10) {
    animation-delay: 0.7s;
  }
  :nth-child(11) {
    animation-delay: 0.6s;
  }
  :nth-child(12) {
    animation-delay: 0.4s;
  }
  :nth-child(13) {
    animation-delay: 0.2s;
  }
  :nth-child(14) {
    animation-delay: 0.3s;
  }
  :nth-child(15) {
    animation-delay: 0.5s;
  }
  :nth-child(16) {
    animation-delay: 0.6s;
  }
  :nth-child(17) {
    animation-delay: 0.1s;
  }
  :nth-child(18) {
    animation-delay: 0.3s;
  }
  :nth-child(19) {
    animation-delay: 0.2s;
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
  return (
    <Container>
      <H1>
        <p>
          <Span>반</Span>
          <Span>갑</Span>
          <Span>습</Span>
          <Span>니</Span>
          <Span>다</Span>
        </p>
        <p>
          <Span>프</Span>
          <Span>론</Span>
          <Span>트</Span>
          <Span>엔</Span>
          <Span>드</Span>
          &nbsp;
          <Span>개</Span>
          <Span>발</Span>
          <Span>자</Span>
          &nbsp;
          <Span>김</Span>
          <Span>라</Span>
          <Span>희</Span>
          <Span>입</Span>
          <Span>니</Span>
          <Span>다</Span>
        </p>
      </H1>
    </Container>
  );
}

export default Header;
