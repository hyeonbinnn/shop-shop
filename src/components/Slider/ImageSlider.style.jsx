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

export const PrevButton = styled.button`
  left: 20px;
  top: 50%;
  transform: translateY(-50%);

  &::before {
    content: '<';
  }
`;

export const NextButton = styled.button`
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

  &::after {
    content: '>';
  }
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);

  @media ${(props) => props.theme.mediaQuery.mobile} {
    bottom: 10px;
  }
`;

export const Indicator = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? 'white' : 'gray')};

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 10px;
    height: 10px;
  }
`;
