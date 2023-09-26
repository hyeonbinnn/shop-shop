import Slider from 'react-slick';
import styled from 'styled-components';

export const SlideContainer = styled(Slider)`
  position: relative;
  overflow: hidden;
  width: 100%;

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide img {
    cursor: pointer;
  }
`;

export const Prev = styled.button`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 50px;
  color: ${({ theme }) => theme.colors.black};
  z-index: 10;

  &::after {
    content: '<';
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    left: 10px;
    font-size: 40px;
  }
`;

export const Next = styled.button`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 50px;
  color: ${({ theme }) => theme.colors.black};
  z-index: 10;

  &::after {
    content: '>';
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    right: 20px;
    font-size: 40px;
  }
`;
