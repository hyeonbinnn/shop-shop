import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import insta from '../../../assets/icon-insta.svg';
import facebook from '../../../assets/icon-facebook.svg';
import youtube from '../../../assets/icon-youtube.svg';

const Footer = () => {
  return (
    <FooterBox>
      <FooterNav>
        <FooterList>
          <Link>
            <li>이용안내</li>
          </Link>
          <Link>
            <li>이용약관</li>
          </Link>
          <Link>
            <li>개인정보처리방침</li>
          </Link>
          <Link>
            <li>회사정보</li>
          </Link>
          <Link>
            <li>고객센터</li>
          </Link>
        </FooterList>
      </FooterNav>

      <FooterSocial>
        <SocialList>
          <SocialLink href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <span className="a11y-hidden">인스타그램</span>
            <img src={insta} alt="인스타그램 아이콘" />
          </SocialLink>
        </SocialList>
        <SocialList>
          <SocialLink href="https://ko-kr.facebook.com/" target="_blank" rel="noopener noreferrer">
            <span className="a11y-hidden">페이스북</span>
            <img src={facebook} alt="페이스북 아이콘" />
          </SocialLink>
        </SocialList>
        <SocialList>
          <SocialLink href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <span className="a11y-hidden">유튜브</span>
            <img src={youtube} alt="유튜브 아이콘" />
          </SocialLink>
        </SocialList>
      </FooterSocial>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.footer`
  display: flex;
  justify-content: space-around;
  margin: 80px auto 0px;
  padding: 10px 0px;
  border-top: ${({ theme }) => `1px solid ${theme.colors.third}`};

  @media ${(props) => props.theme.mediaQuery.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 30px 30px;
  }
`;

const FooterNav = styled.nav`
  padding: 30px 0px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    padding: 30px;
  }
`;

const FooterList = styled.ul`
  display: flex;
  gap: 20px;

  li {
    font-size: 16px;
    font-weight: 600;
  }
`;

const FooterSocial = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SocialList = styled.li`
  width: 50px;
  height: 50px;
  text-align: center;
`;

const SocialLink = styled.a`
  img {
    width: 100%;
    border-radius: 10px;
  }
`;
