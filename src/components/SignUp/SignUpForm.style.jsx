import styled from 'styled-components';
import select from '../../assets/icons/icon-select.svg';
import check_on from '../../assets/icons/icon-check-on.svg';
import check_off from '../../assets/icons/icon-check-off.svg';
import checkBoxEmpty from '../../assets/icons/icon-check-box.svg';
import checkBoxFill from '../../assets/icons/icon-check-fill-box.svg';
import {
  CommonContainer,
  CommonForm,
  CommonHeader,
  CommonMain,
  CommonTabList,
} from '../../styles/CommonStyle';

export const Container = styled(CommonContainer)``;

export const Header = styled(CommonHeader)``;

export const Main = styled(CommonMain)``;

export const SignUpTab = styled.ul``;

export const SignUpTabList = styled(CommonTabList)``;

export const SignUpForm = styled(CommonForm)`
  gap: 35px;

  p {
    margin: -7px 0px 15px 0px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 40px 25px 30px 25px;
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

  &.user-password {
    background: url(${(props) => (props.checked ? check_on : check_off)}) no-repeat right;
    background-size: 28px 28px;
    background-origin: content-box;
  }
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
  gap: 12px;

  input {
    appearance: none;
    width: 16px;
    height: 16px;
    background: url(${checkBoxEmpty}) center/contain no-repeat;
    cursor: pointer;

    &:checked {
      background: url(${checkBoxFill}) center/contain no-repeat;
    }
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 350px;
    gap: 15px;

    input {
      width: 23px;
      height: 23px;
    }
  }
`;

export const SignUpButton = styled.button`
  display: block;
  width: 550px;
  padding: 18px 0px;
  margin: 30px auto 60px;
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
