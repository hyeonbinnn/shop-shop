import styled from 'styled-components';
import previewImageIcon from '../../assets/icons/icon-preview.png';

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

  @media ${(props) => props.theme.mediaQuery.mobile} {
    gap: 40px;
  }
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
    font-size: 15px;
    :focus {
      outline: none;
    }
  }

  span {
    font-size: 15px;
  }
`;

export const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    flex-direction: column;
  }
`;

export const Image = styled.div``;

export const ImageInputBox = styled.div`
  width: 410px;
  height: 410px;
  border-radius: 5px;
  background: ${(props) =>
    props.previewImage
      ? `url(${props.previewImage}) no-repeat center / cover`
      : props.theme.colors.gray};

  input {
    display: none;
  }

  button {
    position: relative;
    top: 44%;
    left: 45%;
    width: 50px;
    height: 50px;
    background: url(${previewImageIcon}) no-repeat center / contain;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 100%;
  }
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

  input {
    padding: 0px 10px;
  }

  span {
    width: 50px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0 5px 5px 0;
  }
`;

export const Input = styled.input`
  width: 145px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${(props) =>
    props.isError
      ? `1px solid ${props.theme.colors.error}`
      : `1px solid ${props.theme.colors.gray}`};
  border-radius: 5px 0 0 5px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 100%;
  }
`;

export const Span = styled.span`
  background-color: ${(props) =>
    props.isError ? props.theme.colors.error : props.theme.colors.gray};
  border: ${(props) =>
    props.isError
      ? `1px solid ${props.theme.colors.error}`
      : `1px solid ${props.theme.colors.gray}`};
`;

export const NameInputBox = styled(InputBox)`
  display: flex;
  position: relative;
  justify-content: space-between;

  input {
    width: 400px;
    border-radius: 5px;
  }

  span {
    width: 70px;
    position: absolute;
    top: 15px;
    right: 0px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray};
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    input {
      width: 100%;
    }
  }
`;

export const ShippingTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.lightGrayText};
`;

export const ShippingBox = styled.div`
  display: flex;

  button {
    flex: 1;
    height: 50px;
    padding: 10px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 5px;
    border: ${(props) => (props.isSelected ? 'none' : `1px solid ${props.theme.colors.gray}`)};
    color: ${(props) =>
      props.isSelected ? props.theme.colors.white : props.theme.colors.lightGrayText};
    background-color: ${(props) =>
      props.isSelected ? props.theme.colors.secondary : props.theme.colors.white};

    &:first-child {
      margin-right: 10px;
    }
  }
`;

export const BottomSection = styled.section`
  input {
    width: 100%;
    height: 700px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    border-radius: 5px;
    border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
    padding: 20px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 200px;
    height: 50px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;

    &:first-child {
      margin-right: 10px;
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.lightGrayText};
      border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
    }

    &:last-child {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.white};

      &:disabled {
        background-color: ${({ theme }) => theme.colors.gray};
        border: none;
      }
    }
  }
`;
