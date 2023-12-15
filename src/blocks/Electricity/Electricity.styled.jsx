import styled from "@emotion/styled";
import { Title } from "../Base/Base";

export const TitleElectr = styled(Title)`
  text-align: center;
  @media (min-width: 768px) {    
    margin-bottom: 24px;
  }
`;

export const QtyWrap = styled.div`
  text-align: center;

  &::before {
    content: "";
    display: block;
    height: 48px;
    width: 1px;
    margin: 0 auto;
    background-color: ${(p) => p.theme.colors.accent};

    @media (min-width: 768px) {
      height: 87px;
    }
  }
`;

export const QtyBox = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const Qty = styled.span`
  text-align: left;
  width: 260px;
  font-size: 48px;
  font-weight: 700;
  font-family: ${(p) => p.theme.fonts.title};
  color: ${(p) => p.theme.colors.accent};

  @media (min-width: 768px) {
    width: 564px;
    font-size: 100px;
  }

  @media (min-width: 1280px) {
    width: 940px;
    font-size: 164px;
  }
`;

export const KWH = styled.span`
  color: ${(p) => p.theme.colors.main};
  font-size: 24px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1280px) {
    font-size: 48px;
  }
`;
