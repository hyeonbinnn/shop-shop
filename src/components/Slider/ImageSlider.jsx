import React, { useState, useEffect } from 'react';
import * as S from './ImageSlider.style';
import banner1 from '../../assets/banner1.svg';
import banner2 from '../../assets/banner2.svg';
import banner3 from '../../assets/banner3.svg';
import banner4 from '../../assets/banner4.svg';
import banner5 from '../../assets/banner5.svg';

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

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const images = [banner1, banner2, banner3, banner4, banner5];

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    }; // 컴포넌트가 언마운트될 때 타이머를 해제하도록 설정하여 메모리 누수를 방지
  }, [currentIndex]);

  return (
    <S.SlideContainer>
      <S.NextButton onClick={nextSlide}></S.NextButton>
      <img src={images[currentIndex]} alt={`배너 이미지 ${currentIndex}`} />
      <S.PrevButton onClick={prevSlide}></S.PrevButton>
      <S.Indicators>
        {images.map((_, index) => (
          <S.Indicator
            key={index}
            onClick={() => goToSlide(index)}
            active={currentIndex === index}
          />
        ))}
      </S.Indicators>
    </S.SlideContainer>
  );
};

export default ImageSlider;
