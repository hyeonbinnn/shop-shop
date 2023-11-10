import styled from 'styled-components';
import preview from '../../assets/icons/icon-preview.png';

export const Main = styled.main`
  padding: 40px 50px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 40px 30px;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 20px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 0px 10px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 60px;
`;

export const Section = styled.section`
  display: flex;
  gap: 80px;
`;

export const TextBox = styled.div`
  width: 30%;

  span {
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.error};
  }

  div {
    background-color: ${({ theme }) => theme.colors.notice};
    border-radius: 5px;
    padding: 20px;

    ul {
      li {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 15px;
        color: ${({ theme }) => theme.colors.text};

        &::before {
          content: '-';
          margin-right: 10px;
        }

        :last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
`;

export const ContentBox = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  gap: 40px;

  label {
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.lightGrayText};
  }

  input {
    :focus {
      outline: none;
    }
  }
`;

export const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

export const Image = styled.div``;

export const ImageInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 410px;
  height: 410px;
  background: ${({ previewImg, theme }) =>
    previewImg ? `url(${preview}) no-repeat center / cover` : theme.colors.gray};
  border-radius: 5px;
`;

export const Info = styled.div`
  div {
    margin-bottom: 10px;

    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const InputBox = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  border: ${({ theme }) => `2px solid ${theme.colors.gray}`};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  font-size: 14px;

  input {
    width: 100%;
    border-radius: 5px 0 0 5px;
    padding: 0px 10px;
  }

  span {
    width: 50px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const NameInputBox = styled(InputBox)`
  min-width: 430px;
  display: flex;
  justify-content: space-between;

  input {
    width: 100%;
  }

  span {
    width: 70px;
    background-color: transparent;
    padding: 0 5px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const ShippingSpan = styled.span`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.lightGrayText};
`;

export const ShippingBox = styled.div`
  display: flex;

  button {
    width: 200px;
    height: 50px;
    padding: 10px;
    font-weight: bold;
    border-radius: 5px;

    :first-child {
      margin-right: 10px;
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.white};
      border: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
    }

    :last-child {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.lightGrayText};
      border: ${({ theme }) => `2px solid ${theme.colors.gray}`};
    }
  }
`;

export const BottomSection = styled.section`
  input {
    width: 100%;
    height: 700px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    border-radius: 5px;
    border: ${({ theme }) => `2px solid ${theme.colors.gray}`};
    padding: 20px;
  }
`;

export const ButtonBox = styled(ShippingBox)`
  justify-content: flex-end;

  button {
    font-size: 16px;

    :first-child {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.lightGrayText};
      border: ${({ theme }) => `2px solid ${theme.colors.gray}`};
    }

    :last-child {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.white};
      border: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
    }
  }
`;
