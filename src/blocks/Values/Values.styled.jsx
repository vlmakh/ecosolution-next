import styled from "@emotion/styled";
import { Title } from "../Base/Base";

export const TitleValues = styled(Title)`
  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

export const ValuesTop = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ValuesText = styled.p`
  @media (min-width: 768px) {
    width: 50%;
    padding-left: 12px;
    border-left: 1px solid ${(p) => p.theme.colors.accent};
  }

  @media (min-width: 1280px) {
    padding-left: 160px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 36px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1280px) {
    gap: 48px;
  }
`;

export const Item = styled.li`
  justify-self: center;
  display: flex;
  justify-content: space-between;
  width: 342px;
  gap: 24px;

  @media (min-width: 1280px) {
    width: 596px;
    gap: 48px;
  }

  :nth-of-type(2),
  :nth-of-type(3) {
    @media (max-width: 767.98px) {
      display: none;
    }
  }
`;

export const ValueCard = styled.div`
  width: 148px;
  padding: 12px 14px;
  background-color: #eaedf1;
  font-size: 14px;

  @media (min-width: 768px) {
    width: 159px;
  }

  @media (min-width: 1280px) {
    width: 274px;
    font-size: 16px;
  }
`;

export const Name = styled.h4`
  text-transform: uppercase;
  padding-bottom: 32px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${(p) => p.theme.colors.accent};
  font-family: ${(p) => p.theme.fonts.title};
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1280px) {
    font-size: 32px;
    padding-top: 48px;

    & svg {
      width: 24px;
      height: 24px;
    }
  }
`;
