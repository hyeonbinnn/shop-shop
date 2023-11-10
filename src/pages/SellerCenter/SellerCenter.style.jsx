import styled from 'styled-components';
import plus from '../../assets/icons/icon-plus.svg';

export const Main = styled.main`
  padding: 40px 50px;
`;

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0px 20px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 150px;
    padding: 10px 0;
    font-size: 16px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};

    &::before {
      content: '';
      margin-right: 8px;
      height: 28px;
      width: 28px;
      background: url(${plus}) no-repeat center / 28px 28px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 30px;

  strong {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 260px;

  li {
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    padding: 15px 20px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGray};
    }
  }

  li:first-child {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ProductBox = styled.div`
  width: 990px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 5px;
`;

export const ItemHeader = styled.ul`
  display: flex;
  justify-content: space-around;
  border-radius: 5px 5px 0px 0px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  background-color: ${({ theme }) => theme.colors.white};

  li {
    font-size: 17px;
    font-weight: bold;
    padding: 15px 10px;

    :first-child {
      margin-left: 120px;
      margin-right: -120px;
    }

    :nth-child(2) {
      margin-left: 245px;
      margin-right: -245px;
    }

    :nth-child(3) {
      margin-left: 180px;
      margin-right: -180px;
    }

    :last-child {
      margin-left: 40px;
      margin-right: -40px;
    }
  }
`;
