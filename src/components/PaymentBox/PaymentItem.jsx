import React from 'react';
import styled from 'styled-components';

const PaymentItem = ({
  product_id,
  image,
  store_name,
  product_name,
  quantity,
  price,
  shipping_fee,
}) => {
  return (
    <Container key={product_id}>
      <ItemInfoBox>
        <Image src={image} alt={product_name} />
        <ItemInfo>
          <span>{store_name}</span>
          <strong>{product_name}</strong>
          <span>수량 : {quantity}</span>
        </ItemInfo>
      </ItemInfoBox>
      <ItemSale>—</ItemSale>
      {shipping_fee ? (
        <ItemDelivery>{shipping_fee?.toLocaleString()}원</ItemDelivery>
      ) : (
        <ItemDelivery>무료배송</ItemDelivery>
      )}

      <ItemPrice>{(price * quantity)?.toLocaleString()}원</ItemPrice>
    </Container>
  );
};

export default PaymentItem;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 25px auto;
  padding: 0px 0px 25px 20px;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.lightGray}`};

  :first-of-type {
    padding-top: 0px;
  }

  span {
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightGrayText};
  }

  strong {
    font-size: 18px;
  }
`;

const ItemInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  border: ${({ theme }) => `1px solid ${theme.colors.third}`};
`;

const ItemInfo = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-weight: bold;
  gap: 9px;
`;

const ItemSale = styled.span`
  margin-left: 15px;
  margin-right: -15px;
`;

const ItemDelivery = styled.span`
  margin-left: 30px;
  margin-right: -30px;
`;

const ItemPrice = styled.strong`
  margin-left: 5px;
  margin-right: -5px;
`;
