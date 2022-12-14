import React, { Children, useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CarouselContext from './CarouselContext';

const CarouselContainer = styled.div`
  width: ${({ itemWidth }) => `${itemWidth}px`};
  position: relative;
  overflow: hidden;
  box-shadow: 3px 3px 3px 3px gray;

  @media (max-width: 400px) {
    width: 300px;
  }
`;

const NavigationWrapper = styled.div`
  width: ${({ itemWidth }) => `${itemWidth}px`};
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  background-color: transparent;
  height: fit-content;
  z-index: 5;
`;

const CarouselItemsWrapper = styled.div`
  width: ${({ translateXAmountLimit }) => `${translateXAmountLimit}px`};
  height: 100%;
  display: flex;
  transform: translateX(${({ translateXAmount }) => `${translateXAmount}px`});
  transition: transform 0.7s ease-in-out;
`;

const Button = styled.button`
  opacity: 0.2;
  transition: opacity 0.4s ease-in-out;
  border-radius: 50%;
  background-color: #9b9b9b;
  padding: 14px;
  margin: 10px;
  :hover {
    opacity: 0.75;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

function Carousel({ autoPlay = true, autoPlayDuration = 2000, children, className, itemWidth = 700, ...others }) {
  const [translateXAmount, setTranslateXAmount] = useState(0);
  const itemCount = Children.toArray(children).length;
  const translateXAmountLimit = itemCount * itemWidth;

  const onClickLeft = () => {
    const newTranslateXAmount = (translateXAmount + itemWidth) % translateXAmountLimit;
    setTranslateXAmount((newTranslateXAmount > 0 ? -translateXAmountLimit : 0) + newTranslateXAmount);
  };
  const onClickRight = useCallback(() => {
    setTranslateXAmount((translateXAmount - itemWidth) % translateXAmountLimit);
  }, [translateXAmount, itemWidth, translateXAmountLimit]);

  useEffect(() => {
    setTranslateXAmount(0);
  }, [itemWidth]);

  useEffect(() => {
    let timer = autoPlay ? setTimeout(onClickRight, autoPlayDuration) : 0;
    return () => {
      if (timer !== 0) clearTimeout(timer);
    };
  }, [translateXAmount, onClickRight, autoPlay, autoPlayDuration]);

  const contextValue = useMemo(() => ({ itemWidth }), [itemWidth]);

  return (
    <CarouselContainer itemWidth={itemWidth} className={className} {...others}>
      <NavigationWrapper itemWidth={itemWidth}>
        <Button onClick={onClickLeft}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>

        <Button onClick={onClickRight}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </NavigationWrapper>

      <CarouselItemsWrapper translateXAmountLimit={translateXAmountLimit} translateXAmount={translateXAmount}>
        <CarouselContext.Provider value={contextValue}>{children}</CarouselContext.Provider>
      </CarouselItemsWrapper>
    </CarouselContainer>
  );
}

export default Carousel;
