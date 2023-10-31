import styled from 'styled-components';
import { DeleteButton } from '../../CartBox/CartItem/CartItem.style';

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: not-allowed;
  z-index: 19;
`;

export const Container = styled.div`
  width: 360px;
  padding: 60px 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  gap: 35px;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-radius: 5px;
  z-index: 20;
  cursor: pointer;
`;

export const Question = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const AnswerBox = styled.div`
  display: flex;
  gap: 10px;

  button {
    width: 100px;
    padding: 10px 0;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  }
`;

export const FirstBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightGrayText};
`;

export const SecondeBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
`;

export const DeleteBtn = styled(DeleteButton)`
  top: 15px;
  right: 15px;
`;

export const Custom = styled.div`
  margin-top: -20px;
  height: 80px;
`;
