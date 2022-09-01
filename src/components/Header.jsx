import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 700px;
  width: 100%;
  background-image: url('image/dot3.jpg');
  background-size: cover;
  background-position: 50% 70%;
  color: white;
  font-size: 70px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 20px 20px 20px #000000;
`;

function Header() {
  return (
    <Container>
      <p>
        <p>반갑습니다.</p>
        <p>프론트엔드 개발자 김라희 입니다.</p>
      </p>
    </Container>
  );
}

export default Header;
