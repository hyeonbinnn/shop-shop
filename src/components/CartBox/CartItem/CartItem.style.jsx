import styled from 'styled-components';
import deleteIcon from '../../../assets/icons/icon-delete.svg';

export const ItemContainer = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 120px 25px 30px;
  margin: 15px auto 0px;
  border: ${({ theme }) => `2px solid ${theme.colors.lightGray}`};
  border-radius: 10px;

  input[type='checkbox'] {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
    background-color: ${({ theme }) => theme.colors.white};
    appearance: none;

    &:checked {
      ::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        border: ${({ theme }) => `2px solid ${theme.colors.white}`};
        background-color: ${({ theme }) => theme.colors.secondary};
        border-radius: 50%;
        appearance: none;
        box-sizing: border-box;
      }
    }
    :disabled {
      border: ${({ theme }) => `2px solid ${theme.colors.gray}`};
    }
  }
`;

export const ItemInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-weight: bold;
  gap: 9px;

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightGrayText};

    :nth-of-type(2) {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  strong {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    margin-top: 50px;
    color: ${({ theme }) => theme.colors.lightGrayText};
  }
`;

export const ItemPrice = styled.div`
  position: relative;
  p {
    font-size: 22px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.error};
    font-weight: bold;
  }
`;

export const BuyButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100px;
  padding: 10px 0;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;

  :disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: -50px;
  right: -100px;
  width: 22px;
  height: 22px;
  background: url(${deleteIcon}) no-repeat;
`;
