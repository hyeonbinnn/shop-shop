import styled from 'styled-components';

export const Product = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 160px;
  padding-bottom: 156px;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  width: 1260px;
  margin-right: 60px;
`;

export const ProductItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ProductImg = styled.div`
  position: relative;
  width: 380px;
  height: 380px;
  border: ${({ theme }) => `1px solid ${theme.colors.third}`}
  border-radius: 10px;
  overflow: hidden;
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
