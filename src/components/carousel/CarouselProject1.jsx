import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import styled from 'styled-components';

const ItemImg = styled.div`
  overflow: hidden;
  background-size: cover;
  background-image: url(${({ imgSrc }) => imgSrc});
  width: 100%;
  height: 350px;
`;

export const CarouselProject1 = (args) => (
  <Carousel {...args}>
    {[
      'image/project1/project1Image1.png',
      'image/project1/project1Image2.png',
      'image/project1/project1Image3.png',
      'image/project1/project1Image4.png',
      'image/project1/project1Image5.png',
      'image/project1/project1Image6.png',
    ].map((imgSrc, i) => {
      return (
        <CarouselItem key={i}>
          <ItemImg imgSrc={imgSrc} />
        </CarouselItem>
      );
    })}
  </Carousel>
);

export default CarouselProject1;
