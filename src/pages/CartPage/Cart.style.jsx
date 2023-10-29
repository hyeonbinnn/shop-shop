import styled from 'styled-components';

export const CartSection = styled.section`
  padding: 40px 50px;
  text-align: center;

  h1 {
    font-size: 30px;
    margin-bottom: 50px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 30px;
  }
`;

export const BuyButton = styled.button`
  width: 220px;
  margin: 20px 0px 150px 0px;
  padding: 18px 0;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  font-weight: bold;
  line-height: 30px;

  :disabled {
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.black};
  }
`;
