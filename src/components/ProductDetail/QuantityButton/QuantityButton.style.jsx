import styled from 'styled-components';
import minus from '../../../assets/icons/icon-minus-line.svg';
import plus from '../../../assets/icons/icon-plus-line.svg';

export const Fieldset = styled.fieldset`
  display: flex;
  padding: 30px 0;
  text-align: center;
  border: none;

  span,
  button {
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    box-sizing: border-box;
  }

  span {
    padding-top: 13px;
    border: ${({ theme }) => `2px solid ${theme.colors.gray}`};
    font-size: 18px;
    font-weight: bold;
    line-height: 23px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 25px 0;
  }
`;

export const MinusButton = styled.button`
  border: ${({ theme }) => `2px solid ${theme.colors.gray}`};
  border-right: none;
  border-radius: 5px 0 0 5px;
  background: url(${minus}) center/ 20px 20px no-repeat;
`;

export const PlusButton = styled.button`
  border: ${({ theme }) => `2px solid ${theme.colors.gray}`};
  border-left: none;
  border-radius: 0 5px 5px 0;
  background: url(${plus}) center/ 20px 20px no-repeat;
`;
