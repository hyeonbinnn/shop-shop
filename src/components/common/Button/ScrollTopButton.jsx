import React, { useState } from 'react';
import styled from 'styled-components';
import scroll from '../../../assets/icon/icon-scroll.svg';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button onClick={scrollTop} show={isVisible}>
      <img src={scroll} alt="스크롤 위로 올리는 화살표 아이콘" />
    </Button>
  );
};

export default ScrollTopButton;

const Button = styled.button`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  bottom: 80px;
  right: 50px;
  z-index: 10;
  border-radius: 50%;

  img {
    width: 45px;
    height: 45px;
    opacity: 0.5;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    bottom: 50px;
    right: 30px;

    img {
      width: 40px;
      height: 40px;
    }
  }
`;
