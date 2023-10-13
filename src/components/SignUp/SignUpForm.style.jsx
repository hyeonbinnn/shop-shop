import styled from 'styled-components';
import select from '../../assets/icons/icon-select.svg';

export const Container = styled.section`
  padding: 30px 20px;
  text-algin: center;
  background-color: ${({ theme }) => theme.colors.white};

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 30px 0px;
  }
`;

export const Header = styled.header`
  width: 350px;
  margin: 30px auto;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 300px;
  }
`;

export const Main = styled.main`
  width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 400px;
  }
`;

export const SignUpTab = styled.ul``;

export const SignUpTabList = styled.li`
  display: inline-block;
  width: 50%;
  padding: 20px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  font-size: 17px;
  font-weight: bold;
  line-height: 22px;
  text-align: center;
  box-sizing: border-box;
  background-color: ${({ theme, isSelected }) =>
    isSelected === true ? theme.colors.white : theme.colors.lightGray};
  cursor: pointer;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 15px;
    font-size: 15px;
  }
`;

export const SignUpForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 40px;
  gap: 35px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-top: none;
  border-radius: 0 0 10px 10px;
  box-sizing: border-box;

  p {
    margin: -7px 0px 15px 0px;
    font-size: 13px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 40px 25px 30px 25px;
    p {
      margin-top: -9px;
    }
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.error};
`;

export const Pass = styled.p`
  color: ${({ theme }) => theme.colors.pass};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.footerTxt};
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-radius: 5px;
  font-weight: bold;
  margin: 10px 0px 15px 0px;
`;

export const DoubleCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  input {
    width: 80%;
  }

  button {
    width: 20%;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    border-radius: 5px;
    margin: 10px 0px 15px 0px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    input {
      width: 75%;
    }

    button {
      width: 25%;
      font-size: 13px;
    }
  }
`;

export const PhoneBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  input {
    text-align: center;
  }
`;

export const Select = styled.select`
  width: 60%;
  padding: 15px 20px 15px 50px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-radius: 5px;
  font-weight: bold;
  margin: 10px 0px 15px 0px;
  appearance: none;
  background: url(${select}) right center/25px auto no-repeat;
  background-position: 100px 10px;

  option {
    font-weight: bold;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 60%;
    padding: 15px 20px;
    background-size: 20px;
    background-position: 55px 13px;
  }
`;

export const Section = styled.section``;

export const CheckBox = styled.div`
  display: flex;
  flex: row;
  align-items: center;
  justify-content: center;
  width: 600px;
  margin: 0 auto;
  gap: 10px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 350px;
  }
`;

export const SignUpButton = styled.button`
  display: block;
  width: 550px;
  padding: 18px 0px;
  margin: 30px auto 80px;
  border-radius: 5px;
  font-size: 17px;
  font-weight: bold;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.lightGray : theme.colors.black};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.black : theme.colors.white)};
  border: ${({ theme, disabled }) => (disabled ? `1px solid ${theme.colors.gray}` : 'none')};

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 350px;
    font-size: 15px;
  }
`;
