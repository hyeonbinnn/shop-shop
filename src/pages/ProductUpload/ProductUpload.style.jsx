import styled from 'styled-components';

export const Main = styled.main`
  padding: 40px 50px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 40px 30px;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 20px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 0px 10px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 60px;
`;

export const Section = styled.section`
  display: flex;
  gap: 30px;
`;

export const TextBox = styled.div`
  width: 30%;

  p {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.error};
  }

  div {
    background-color: ${({ theme }) => theme.colors.notice};
    border-radius: 5px;
    padding: 20px;

    ul {
      li {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 15px;
        color: ${({ theme }) => theme.colors.text};

        &::before {
          content: '-';
          margin-right: 10px;
        }

        :last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
`;

export const ContentBox = styled.div`
  width: 70%;
  background-color: lightBlue;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ProductInfo = styled.div``;

export const ProductDetail = styled.div``;
