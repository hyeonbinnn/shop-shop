import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 1280px;
  margin: 0 auto;
  padding: 174px 0 140px;
  gap: 50px;
`;

export const H1 = styled.h1``;

export const DetailBox = styled.div`
  width: 630px;
`;

export const ProductImg = styled.img`
  width: 600px;
  height: 600px;
  border: 1px solid lightgray;
  object-fit: cover;
`;

export const ProductStore = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;
`;

export const ProductName = styled.strong`
  display: block;
  margin: 16px 0 20px;
  font-size: 36px;
  font-weight: 400;
  line-height: 45px;
`;

export const ProductPrice = styled.div`
  strong {
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
  }
`;

export const Shipping = styled.p``;
