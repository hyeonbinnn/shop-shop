import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Footer.style';
import insta from '../../../assets/icon-insta.svg';
import facebook from '../../../assets/icon-facebook.svg';
import youtube from '../../../assets/icon-youtube.svg';

const Footer = () => {
  return (
    <S.FooterWrap>
      {/* 왼쪽바 */}
      <S.FooterNav>
        <S.FooterMenuList>
          <Link>
            <S.List>이용안내</S.List>
          </Link>
          <Link>
            <S.List>이용약관</S.List>
          </Link>
          <Link>
            <S.List>개인정보처리방침</S.List>
          </Link>
          <Link>
            <S.List>회사정보</S.List>
          </Link>
          <Link>
            <S.List>고객센터</S.List>
          </Link>
        </S.FooterMenuList>
      </S.FooterNav>

      {/* 오른쪽 소셜바 */}
      <S.FooterSocialList>
        <S.SocialList>
          <S.SocialLink href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <span className="a11y-hidden">인스타그램</span>
            <img src={insta} alt="인스타그램 아이콘" />
          </S.SocialLink>
        </S.SocialList>
        <S.SocialList>
          <S.SocialLink
            href="https://ko-kr.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="a11y-hidden">페이스북</span>
            <img src={facebook} alt="페이스북 아이콘" />
          </S.SocialLink>
        </S.SocialList>
        <S.SocialList>
          <S.SocialLink href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <span className="a11y-hidden">유튜브</span>
            <img src={youtube} alt="유튜브 아이콘" />
          </S.SocialLink>
        </S.SocialList>
      </S.FooterSocialList>
    </S.FooterWrap>
  );
};

export default Footer;
