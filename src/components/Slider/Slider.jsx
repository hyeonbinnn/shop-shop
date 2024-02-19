import React, { useState, useEffect, useRef } from 'react';
import * as S from './Slider.style';

import 'react-loading-skeleton/dist/skeleton.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as Prev } from '../../assets/icons/icon-prev.svg';
import { ReactComponent as Next } from '../../assets/icons/icon-next.svg';
import banner1 from '../../assets/images/banner1.webp';
import banner2 from '../../assets/images/banner2.webp';
import banner3 from '../../assets/images/banner3.webp';
import banner4 from '../../assets/images/banner4.webp';
import banner5 from '../../assets/images/banner5.webp';

const ImageSlider = () => {
  const [loading, setLoading] = useState(true);
  const images = useRef([
    { src: banner1, alt: '팔로우 이벤트 배너' },
    { src: banner2, alt: '추석 연휴 안내 배너' },
    { src: banner3, alt: '한국은행 프로모션 배너' },
    { src: banner4, alt: '특별 프로모션 배너' },
    { src: banner5, alt: '케이카드 혜택 배너' },
  ]);

  // slick-carousel 동작 및 스타일 제어
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    prevArrow: (
      <S.PrevDiv>
        <Prev />
      </S.PrevDiv>
    ),
    nextArrow: (
      <S.NextDiv>
        <Next />
      </S.NextDiv>
    ),
  };

  useEffect(() => {
    const imagePromises = images.current.map((img) => {
      return new Promise((resolve) => {
        const image = new Image();
        image.src = img.src;
        image.onload = () => {
          resolve();
        };
      });
    });

    Promise.all(imagePromises).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <S.SkeletonCustom />
      ) : (
        <S.SlideContainer {...settings}>
          {images.current.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} loading={i === 0 ? 'eager' : 'lazy'} />
          ))}
        </S.SlideContainer>
      )}
    </>
  );
};

export default ImageSlider;
