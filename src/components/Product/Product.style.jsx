import styled from 'styled-components';

export const Product = styled.main`
  display: flex;
  justify-content: center;
  padding: 50px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 10px 50px;
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 60px;
  margin: 0px auto;
  padding: 0px 30px;
  width: 1280px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 0px;
  }
`;

export const ProductItem = styled.li`
  position: relative;
  cursor: pointer;

  @media ${(props) => props.theme.mediaQuery.mobile} {
  }
`;

export const ProductImg = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 280/280;
  object-fit: cover;
  vertical-align: top;
  border: ${({ theme }) => `1px solid ${theme.colors.third}`};
  border-radius: 10px;
  overflow: hidden;

  @media ${(props) => props.theme.mediaQuery.mobile} {
  }
`;

export const ProductName = styled.strong`
  width: 338px;
  margin: 20px 0 10px;
`;

export const LikeBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 40px;
`;

// medium 사이즈
export const ProductPrice = styled.div`
  display: flex;
  align-items: center;

  strong {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      margin-left: 2px;
    }
  }
`;
