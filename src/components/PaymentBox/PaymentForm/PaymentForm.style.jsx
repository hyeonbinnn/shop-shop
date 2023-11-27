import styled from 'styled-components';

export const Form = styled.form`
  margin: 90px 0px;
  display: flex;
  flex-direction: column;
  gap: 70px;
  text-align: left;

  label,
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Title = styled.h2`
  padding-bottom: 18px;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.gray}`};
  font-size: 23px;

  &:last-child {
    border-bottom: none;
  }
`;

export const SubTitle = styled.h3`
  padding: 40px 0px 10px 0px;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.gray}`};
  font-size: 18px;
`;

export const FinalTitle = styled(Title)`
  border-bottom: none;
`;

export const ShippingInfo = styled.section``;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.third}`};

  label {
    width: 200px;
  }

  input {
    height: 40px;
    border: ${({ theme }) => `1px solid ${theme.colors.third}`};
    outline: none;
    padding-left: 10px;
  }

  span {
    margin: 0px 10px;
    color: ${({ theme }) => theme.colors.lightGrayText};
  }
`;

export const PaymentInfo = styled.section`
  display: flex;
  gap: 40px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    gap: 70px;
    flex-direction: column;
  }
`;

export const PaymentMethod = styled.div``;

export const MethodBox = styled.div`
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.gray}`};
  padding: 18px 12px 18px 12px;
  line-height: 2;

  input {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    border: ${({ theme }) => `2px solid ${theme.colors.gray}`};
    border-radius: 50%;
    margin-right: 10px;
  }

  label {
    margin-right: 20px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

export const FinalPayment = styled.div``;

export const FinalBox = styled.div`
  border-radius: 10px;
  border: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
  overflow: hidden;
`;

export const CheckFinal = styled.div`
  padding: 34px 30px 25px 30px;
`;

export const TopInfo = styled.div`
  margin-bottom: 15px;

  :nth-child(3) {
    padding-bottom: 20px;
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.gray}`};
  }
`;

export const BottomInfo = styled.div`
  margin-top: 29px;
`;

export const GoToFinal = styled.div`
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.lightGray};

  input {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    border: ${({ theme }) => `2px solid ${theme.colors.gray}`};
    margin-right: 10px;
  }

  label {
    line-height: 1.5;
  }

  button {
    display: block;
    width: 220px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.secondary};
    margin: 30px auto 0px;
    font-size: 23px;
    font-weight: bold;
    padding: 19px 60px;
    border-radius: 10px;
  }
`;
