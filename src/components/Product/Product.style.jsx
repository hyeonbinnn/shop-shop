import styled from 'styled-components';

// Product 레이아웃
export const Product = styled.main`
  display: flex;
  justify-content: center;
  padding: 80px 50px;
  margin: 30px 0px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 60px 50px;
    margin: 10px 0px;
  }
`;

// 상품 리스트
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
`;

// 상품 이미지
export const ProductBox = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 280/280;
  object-fit: cover;
  vertical-align: top;
  border: ${({ theme }) => `1px solid ${theme.colors.third}`};
  border-radius: 10px;
  overflow: hidden;
`;

export const ProductImg = styled.img``;

// 상품 이름
export const ProductName = styled.strong`
  width: 338px;
  margin: 20px 0 10px;
`;

// 좋아요 버튼
export const LikeBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 40px;
`;

// 상품 가격
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
