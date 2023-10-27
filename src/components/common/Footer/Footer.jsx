import React from 'react';
import * as S from './Footer.style';
import insta from '../../../assets/icons/icon-insta.svg';
import facebook from '../../../assets/icons/icon-facebook.svg';
import youtube from '../../../assets/icons/icon-youtube.svg';

const Footer = () => {
  return (
    <S.FooterWrap>
      <S.FooterBox1>
        <S.FooterMenuList>
          <S.List>
            <button>숍숍소개</button>
          </S.List>
          <S.List>
            <button>이용약관</button>
          </S.List>
          <S.List>
            <button>개인정보처리방침</button>
          </S.List>
          <S.List>
            <button>전자금융거래약관</button>
          </S.List>
          <S.List>
            <button>청소년보호정책</button>
          </S.List>
          <S.List>
            <button>제휴문의</button>
          </S.List>
        </S.FooterMenuList>

        <S.FooterSocialList>
          {[
            {
              link: 'https://www.instagram.com/',
              icon: insta,
              alt: '인스타그램 아이콘',
              text: '인스타그램',
            },
            {
              link: 'https://ko-kr.facebook.com/',
              icon: facebook,
              alt: '페이스북 아이콘',
              text: '페이스북',
            },
            {
              link: 'https://www.youtube.com/',
              icon: youtube,
              alt: '유튜브 아이콘',
              text: '유튜브',
            },
          ].map((social, index) => (
            <S.SocialList key={index}>
              <S.SocialLink href={social.link} target="_blank" rel="noopener noreferrer">
                <span className="a11y-hidden">{social.text}</span>
                <img src={social.icon} alt={social.alt} />
              </S.SocialLink>
            </S.SocialList>
          ))}
        </S.FooterSocialList>
      </S.FooterBox1>
      <S.FooterBox2>
        <strong>(주) SHOP SHOP</strong>
        <span>서울특별시 가나구 다나동 아자로 2 카타빌딩 3층</span>
        <span>사업자 번호 : 000-0000-0000 | 통신판매업</span>
        <span>대표 : 김쇼핑</span>
      </S.FooterBox2>
    </S.FooterWrap>
  );
};

export default Footer;
