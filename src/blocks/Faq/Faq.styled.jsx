import styled from "@emotion/styled";
import { Section, Title } from "../Base/Base";

export const SectionFaq = styled(Section)`
  @media (min-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
  }
`

export const TitleFaq = styled(Title)`
  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1280px) {
    padding-left: 160px;
  }
`;

export const List = styled.ul`
  list-style: none;

  @media (max-width: 767.68px) {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Item = styled.li`
  border-top: 1px solid ${(p) => p.theme.colors.accent};
  padding-top: 16px;

  &:not(:last-child)
  {padding-bottom: 16px;}
`;

export const Question = styled.div`
  display: flex;  
  cursor: pointer;
`;

export const PlusMinus = styled.p`
  color: ${(p) => p.minus ? p.theme.colors.main : p.theme.colors.accent};
  font-size: 20px;
  padding: 0 4px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Answer = styled.p`
  padding-left: 24px;
  padding-top: 16px;
  display: ${(p) => (p.opened ? "block" : "none")};
`;

export const Didnt = styled.div`
  margin-top: 36px;
  text-align: center;

  @media (min-width: 768px) {
    position: absolute;
    bottom: 0;
    right: 48px;
  }

  @media (min-width: 1280px) {
    position: absolute;
    bottom: 0;
    right: 148px;
  }
`;

