import styled from 'styled-components';

export const PaymentSection = styled.section`
  padding: 40px 50px;
  text-align: center;
  overflow: hidden;

  h1 {
    font-size: 30px;
    margin-bottom: 50px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 30px;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const TotalPrice = styled.div`
  text-align: right;
  font-size: 18px;
  font-weight: bold;

  strong {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.error};
    margin-left: 10px;
  }
`;
