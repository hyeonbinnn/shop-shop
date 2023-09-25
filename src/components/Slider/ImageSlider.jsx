import React, { useState } from 'react';
import * as S from './ImageSlider.style';
import banner1 from '../../assets/banner1.svg';
import banner2 from '../../assets/banner2.svg';
import banner3 from '../../assets/banner3.svg';
import banner4 from '../../assets/banner4.svg';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  const images = [banner1, banner2, banner3, banner4];

  return (
    <S.SlideContainer>
      <S.NextButton onClick={nextSlide}></S.NextButton>
      <img src={images[currentIndex]} alt={`배너 이미지 ${currentIndex}`} />
      <S.PrevButton onClick={prevSlide}></S.PrevButton>
    </S.SlideContainer>
  );
};

export default ImageSlider;
