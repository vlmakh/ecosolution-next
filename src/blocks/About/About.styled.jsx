import styled from "@emotion/styled";
import { Title } from "../Base/Base";

export const AboutTop = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const TitleAbout = styled(Title)`
  @media (min-width: 768px) {
    width: 50%;
    padding-left: 11px;
  }

  @media (min-width: 1280px) {
    padding-left: 161px;
  }
`;

export const AboutText = styled.p`
  @media (min-width: 768px) {
    width: 50%;
    padding-right: 65px;
    border-right: 1px solid ${(p) => p.theme.colors.accent};
  }

  @media (min-width: 1280px) {
    padding-right: 134px;
  }
`;

export const Accent = styled.span`
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.accent};
`;
