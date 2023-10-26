import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 32px 0px 25px;
  white-space: nowrap;
`;

export const TotalInfo = styled.span`
  font-size: 18px;
  font-weight: bold;
  line-height: 23px;
`;

export const TotalPrice = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 36px;
  font-weight: bold;

  span {
    font-size: 18px;
    font-weight: bold;
    line-height: 23px;
  }
`;

export const TotalQuantity = styled.span`
  color: ${({ theme }) => theme.colors.lightGrayText};

  strong {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 23px;
  }

  &::after {
    content: '|';
    position: relative;
    top: -3px;
    margin: 0px 12px;
    color: ${({ theme }) => theme.colors.lightGrayText};
  }
`;

export const SpanUnit = styled.span`
  margin-left: 5px;
`;

export const SoldOutButton = styled.button``;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;
`;

export const BuyButton = styled.button`
  width: calc(60% - 5px);
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px 10px;
  font-size: 17px;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;

  :disabled {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const CartButton = styled.button`
  width: calc(40% - 5px);
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
  padding: 10px;
  font-size: 17px;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;

  :disabled {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
