import styled from 'styled-components';

export const Main = styled.main`
  padding: 100px 50px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 70px 30px;
  }
`;

export const Container = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 100px;
  gap: 60px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
`;

export const H1 = styled.h1``;

export const DetailBox = styled.div`
  width: 680px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 400px;
  }
`;

export const ProductImg = styled.img`
  width: 600px;
  height: 600px;
  border: ${({ theme }) => `1px solid ${theme.colors.third}`};
  border-radius: 10px;
  object-fit: cover;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 400px;
    height: 400px;
  }
`;

export const ProductStore = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.lightGrayText};

  @media ${(props) => props.theme.mediaQuery.mobile} {
    font-size: 18px;
  }
`;

export const ProductName = styled.strong`
  display: block;
  margin: 16px 0px;
  font-size: 33px;
  font-weight: bold;
  line-height: 45px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    font-size: 27px;
    line-height: 35px;
  }
`;

export const ProductPrice = styled.div`
  strong {
    font-size: 35px;
    line-height: 35px;

    span {
      font-size: 20px;
      line-height: 20px;
      margin-left: 3px;
    }
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    strong {
      font-size: 30px;
      line-height: 30px;

      span {
        font-size: 18px;
      }
    }
  }
`;

export const Shipping = styled.p`
  color: ${({ theme }) => theme.colors.lightGrayText};
  font-size: 16px;
  font-weight: bold;
  margin-top: 160px;
  padding-bottom: 20px;
  border-bottom: ${({ theme }) => `3px solid ${theme.colors.gray}`};

  @media ${(props) => props.theme.mediaQuery.mobile} {
    margin-top: 60px;
  }
`;

export const ProductInfo = styled.section`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  label {
    display: inline-block;
    width: 320px;
    color: ${({ theme }) => theme.colors.lightGrayText};
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    padding: 19px 0 18px;
    border: none;
    background-color: ${({ theme }) => theme.colors.white};
    text-align: center;
    box-sizing: border-box;
    border-bottom: ${({ theme }) => `6px solid ${theme.colors.third}`};
    cursor: pointer;
  }

  input {
    display: none;
    :checked + label {
      border-bottom: ${({ theme }) => `6px solid ${theme.colors.secondary}`};
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    label {
      font-size: 18px;
      padding: 17px 0 16px;
    }
  }
`;

export const Detail = styled.div`
  height: 500px;
  padding: 30px 10px;
  font-size: 16px;
`;
