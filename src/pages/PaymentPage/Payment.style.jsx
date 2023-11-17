import styled from 'styled-components';

export const PaymentSection = styled.section`
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