import React from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

import { axiosInstance } from '../../axios';
import { removeCookie } from '../../services/cookies';

const DropDown = () => {
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      await axiosInstance.post('accounts/logout/');
      removeCookie('token');
      removeCookie('loginType');
      navigate('/');
      window.location.reload();
    } catch (error) {
      return error.response.data;
    }
  };

  return (
    <Menu>
      <Link to="/comingSoon">
        <li>마이페이지</li>
      </Link>
      <li onClick={logoutUser}>로그아웃</li>
    </Menu>
  );
};

export default DropDown;

const Menu = styled.ul`
  position: absolute;
  top: 70px;
  left: -28px;
  width: 130px;
  z-index: 11;
  padding: 10px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.3));

  li {
    display: block;
    width: 100%;
    margin-bottom: 8px;
    padding: 10px;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 5px;
    font-weight: bold;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.lightGrayText};
    background-color: ${({ theme }) => theme.colors.white};
    box-sizing: border-box;
    cursor: pointer;

    :last-child {
      margin-bottom: 0px;
    }

    :hover {
      box-sizing: border-box;
      color: ${({ theme }) => theme.colors.text};
      border: ${({ theme }) => `1px solid ${theme.colors.text}`};
    }
  }
  :before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    left: 54px;
    top: -8px;
    background-color: ${({ theme }) => theme.colors.white};
    transform: rotate(45deg);
    border-radius: 4px;
    z-index: -10;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    top: 65px;
    left: -18px;
    width: 100px;
    padding: 7px;

    li {
      margin-bottom: 6px;
      padding: 7px;
      font-size: 13px;
    }

    :before {
      width: 15px;
      height: 15px;
      left: 43px;
      top: -8px;
      background-color: ${({ theme }) => theme.colors.white};
      transform: rotate(45deg);
      border-radius: 4px;
      z-index: -10;
    }
  }
`;
