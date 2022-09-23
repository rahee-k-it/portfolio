import { useContext } from 'react';
import styled from 'styled-components';
import CarouselContext from './CarouselContext';

const CarouselItemContainer = styled.div`
  height: 350px;
  width: ${({ itemWidth }) => `${itemWidth}px`};
  position: relative;

  @media (max-width: 400px) {
    height: 200px;
  }
`;

function CarouselItem({ children }) {
  const { itemWidth = 400 } = useContext(CarouselContext);
  return <CarouselItemContainer itemWidth={itemWidth}>{children}</CarouselItemContainer>;
}

export default CarouselItem;
