import styled from 'styled-components';

export const SlideContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
    display: inline-block;
  }

  button {
    background-color: transparent;
    position: absolute;
    font-size: 40px;
    color: ${({ theme }) => theme.colors.footerTxt};
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    button {
      font-size: 30px;
    }
  }
`;

export const NextButton = styled.button`
  left: 10px;
  top: 50%;
  transform: translateY(-50%);

  &::before {
    content: '<';
  }
`;

export const PrevButton = styled.button`
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  &::after {
    content: '>';
  }
`;
