import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 630px;
  padding: 32px 0 22px;
  white-space: nowrap;
`;

export const TotalInfo = styled.span`
  font-size: 18px;
  font-weight: bold;
  line-height: 23px;
`;

export const TotalPrice = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 36px;
  font-weight: bold;
  line-height: 45px;

  span {
    font-size: 18px;
    font-weight: bold;
    line-height: 23px;
  }
`;

export const TotalQuantity = styled.span`
  color: ${({ theme }) => theme.colors.lightGrayText};

  strong {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 23px;
  }

  &::after {
    content: '|';
    position: relative;
    top: -3px;
    margin: 0px 12px;
    color: ${({ theme }) => theme.colors.lightGrayText};
  }
`;
