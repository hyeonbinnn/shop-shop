import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 50px 100px;
  margin: 30px auto;
  border-radius: 10px;

  div {
    display: flex;
    flex-direction: column;
    gap: 15px;

    span {
      font-size: 17px;
      font-weight: bold;
    }
  }

  img {
    width: 34px;
    height: 34px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 100%;
    padding: 8px;
  }
`;

export const PriceBox = styled.div`
  strong {
    font-size: 22px;
  }
`;

export const TotalBox = styled.div`
  margin-left: 120px;

  strong {
    font-size: 35px;
    color: ${({ theme }) => theme.colors.error};
  }
`;
