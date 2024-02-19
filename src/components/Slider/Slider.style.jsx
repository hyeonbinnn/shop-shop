import Slider from 'react-slick';
import styled from 'styled-components';

export const SlideContainer = styled(Slider)`
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide img {
    cursor: pointer;
  }
`;

export const PrevDiv = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 40px;
  z-index: 10;
`;

export const NextDiv = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 40px;
  z-index: 10;
  transform: rotate(180deg);
  margin-top: -14px;
`;
