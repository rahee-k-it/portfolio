import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 500px;
  width: 100%;
  font-size: 50px;
  background-image: url('image/sea.jpg');
  background-size: cover;
  background-position: 50% 20%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
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
