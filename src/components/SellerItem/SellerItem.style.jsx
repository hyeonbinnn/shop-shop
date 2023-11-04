import styled from 'styled-components';

export const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  max-width: 100%;
  padding: 15px 10px 15px 90px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  background-color: ${({ theme }) => theme.colors.white};

  button {
    width: 70px;
    padding: 10px 0;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const ProductImg = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
`;

export const ProductInfo = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-right: 60px;
  margin-left: -60px;

  strong {
    font-size: 18px;
  }

  span {
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.lightGrayText};
    font-size: 16px;
  }
`;

export const ProductPrice = styled.strong`
  font-size: 18px;
  margin-right: 3px;
  margin-left: -3px;
`;

export const EditButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-left: 28px;
  margin-right: -28px;
`;

export const DeleteButton = styled.button`
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  background-color: ${({ theme }) => theme.colors.white};
  margin-right: 30px;
  margin-left: -30px;
`;
