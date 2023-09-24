import styled from 'styled-components';

export const SlideContainer = styled.section`
  width: 100%;
  height: 500px;
  background-color: #eeb2b2;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    height: 400px;
  }
`;
