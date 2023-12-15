import styled from "@emotion/styled";
import { Title } from "../Base/Base";

export const TitleCases = styled(Title)`
  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

export const CasesTop = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ButtonArrow = styled.button`
  display: inline-grid;
  place-items: center;
  width: 66px;
  height: 66px;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid ${(p) => p.theme.colors.main};
  cursor: pointer;

  transition: all 250ms ease-in;

  &:hover {
    border-color: ${(p) => p.theme.colors.accent};
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const CtrlBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 28px;
  font-weight: 300;

  @media (min-width: 768px) {
    width: 50%;
    padding-left: 8px;
    border-left: 1px solid ${(p) => p.theme.colors.accent};
  }

  @media (min-width: 1280px) {
    padding-left: 160px;
  }
`;

export const Grey = styled.span`
  color: ${(p) => p.theme.colors.main025};
`;

export const SliderWrap = styled.div`
  overflow: hidden;

  & .slick-next {
    display: none;
  }

  @media (max-width: 767.98px) {
    margin-top: 24px;
  }

  @media (min-width: 768px) {
    margin-top: 40px;

    & .slick-list {
      overflow: visible;
    }
  }

  @media (min-width: 1280px) {
    margin-top: 120px;
  }
`;

export const CardWrap = styled.div`
  @media (min-width: 768px) {
    padding-left: 12px;
    padding-right: 12px;
    height: 100%;
  }
`;

export const CaseCard = styled.div`
  background-color: ${(p) => p.theme.colors.grey};
`;

export const NameBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 12px;
`;

export const ButtonCase = styled.a`
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  background-color: ${(p) => p.theme.colors.accent};
  border-radius: 50%;
  border: none;

  transition: all 250ms ease-in;

  &:hover {
    background-color: ${(p) => p.theme.colors.main};
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const Name = styled.p`
  text-align: left;
  width: 175px;

  @media (min-width: 768px) {
    width: 200px;
  }

  @media (min-width: 1280px) {
    width: 360px;
  }
`;

export const CardFooter = styled.div`
  width: calc(100% - 24px);
  border-top: 1px solid ${(p) => p.theme.colors.accent};
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 0 auto;
  font-size: 12px;
  text-align: left;

  @media (min-width: 768px) {
    /* font-size: 14px; */
  }

  @media (min-width: 1280px) {
    font-size: 16px;
  }
`;
